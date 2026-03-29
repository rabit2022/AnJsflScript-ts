
		/**
		 * Static convenience method to create and show interface in one call, returning any submitted values
		 * @param	{String}	props		A String of shorthand controls
		 * @param	{Function}	props		A Function, the parameters of which will map to dialog controls
		 * @param	{Function}	accept		An optional callback function to be called when the user clicks the OK button
		 * @param	{Function}	cancel		An optional callback function to be called when the user clicks the Cancel button
		 * @param	{Object}	defaults	An optional Object of name:value properties to apply to the dialog
		 * @returns	{Object}				An Object containing the accepted values, or null if the user cancels the dialog
		 */
		XUL.create = function(props, accept, cancel, defaults)
		{
			// build new XUL
				var xul = XUL.factory(props);
				
			// assign defaults
				if(defaults)
				{
					xul.setValues(defaults);
				}

			// show
				if(xul && Object.keys(xul.controls).length > 0)
				{
					xul.show(accept, cancel);
					if(xul.settings && xul.settings.dismiss === 'accept')
					{
						return xul.values;
					}
				}

			// return
				return null;
		}

		XUL.prototype =
		{
			// --------------------------------------------------------------------------------
			// properties

				// settings
					id:			null,
					xml:		null,

				// properties
					controls:	{},
					settings:	{},
					events:		{},
					rules:		{},
					columns:	[100, 180],

				// template
					content:	'',
					separator:	'</rows></grid><separator /><grid><columns><column flex="1" /><column flex="2" /></columns><rows>',

				// properties
					title:		'',
					error:		null,

				// flags
					built:		false,
					open:		false,
					accepted:	false,

			// --------------------------------------------------------------------------------
			// # Control methods

				// misc
					/**
					 * (private) Main add control method
					 * @param	{String}	type		The control type, i.e. button, colorchip, etc
					 * @param	{String}	id			The control id
					 * @param	{String}	label		The control label
					 * @param	{XML}		xml			The original XML of the control, built by the appropriate addControl method
					 * @param	{Object}	attributes	Any additional attributes that should be applied to the control XML
					 * @param	{Object}	validation	Any validation rules that should be applied to the control
					 * @param	{Object}	events		An Object containing event:callback pairs
					 * @param	{Boolean}	user		An optional Boolean specifying to use use XML? //TODO check this
					 * @returns	{XUL}					The XUL dialog
					 */
					_addControl:function(type, id, label, xml, attributes, validation, events, user)
					{
						// element
							var element			= user ? xml : xml[type][0];

						// label
							id					= id || this._makeId(label);

							if(xml.label && xml.label.length())
							{
								xml.label.@value = label ? label + ' : ' : ' ';
							}

						// check id is not already defined
							if(this.controls[id])
							{
								throw new Error('XUL.addControl(): Cannot add <' +type+ '> control - duplicate id "' +id+ '"');
							}

						// id & attributes
							if(element)
							{
								element.@id = id;
								for(var attr in attributes)
								{
									if(/^(value|checked)$/.test(attr))
									{
										// need to add / set values using JavaScript (rather than in XML) or else the field will always show initial values when being re-shown
										this.settings[id] = attributes[attr];
									}
									else
									{
										element['@' + attr] = attributes[attr];
									}
								}
							}
							
						// width
							if(attributes && attributes.width > this.columns[1])
							{
								this.columns[1] = attributes.width;
							}

						// combo / selected

						// special cases

							// target list
								switch(type)
								{
									case 'targetlist':
										var property = xml['property'][0];
										property.@id = id;
									break;

									case 'radiogroup':
									case 'menulist':
									case 'listbox':
										var selected		= xml..*.(function(element){return element.@selected && element.@selected == 'true';});
										this.settings[id]	= selected.@value;
										//trace('>>' + selected.toXMLString())
									break;
								}

						// setup validation
							if(validation)
							{
								this._addValidation(id, validation);
							}

						// setup events
							if(events)
							{
								this._addEvents(id, events);
							}

						// set control
							this.controls[id] = new XULControl(id, type, this, xml);
							if(user !== true)
							{
								this.addXML(xml, false, true);
							}

						// debug
							//trace(xml)


						// return
							return xml;
					},


					/**
					 * Add validation to an individual control (not yet implemented)
					 * @param	{String}	id			The id of the control
					 * @param	{Object}	validation	Not yet implemented
					 * @returns	{XUL}					The XUL dialog
					 */
					_addValidation:function(id, validation)
					{
						if(this.rules[id] == null)
						{
							this.rules[id] = {};
						}
						for(var rule in validation)
						{
							this.rules[id][rule] = validation[rule];
						}
						return this;
					},

					/**
					 * Add events to an individual control
					 * @param	{String}	id			The id of the control
					 * @param	{Object}	events		An Object containing event:callback pairs
					 * @returns	{XUL}					The XUL dialog
					 */
					_addEvents:function(id, events)
					{
						for(var name in events)
						{
							this.addEvent(id, name, events[name]);
						}
						return this;
					},

				/**
				 * Sets the initial values of controls in the dialog
				 * @param	{Object}	values			A hash of control:value values
				 * @param	{XML}		values			An XML node of <name>value</name> elements
				 * @returns	{XUL}						The XUL dialog
				 */
				setValues:function(values)
				{
					if(typeof values == 'xml')
					{
						if(values.length() === 1 && values.*.length() > 0)
						{
							values = values.*;
						}
						for each(var node in values)
						{
							this.setValue(node.name(), String(node.valueOf()));
						}
					}
					else
					{
						for(var id in values)
						{
							this.setValue(id, values[id]);
						}
					}
					return this;
				},

				/**
				 * Sets the initial value of a control in the dialog
				 * @param	{String}	id				The name of the control
				 * @param	{value}		value			The value of the control
				 * @returns	{XUL}						The XUL dialog
				 */
				setValue:function(id, value)
				{
					//TODO Add support for checkbox groups
					//TODO Re-evaluate the logic behind using XMLUI.settings, and think about using XUL.values
					if(this.controls[id])
					{
						this.settings[id] = String(value);
					}
					return this;
				},

			// --------------------------------------------------------------------------------
			// # Event handling

				/**
				 * Add (or actually, set) a event callback for an id. Global events take only type and callback arguments.
				 * @param	{String}	ids			The id(s) of the element to register the callback for
				 * @param	{String}	types		The type(s) of callback. Values can be create, change, click, setfocus. Separate multiple types with spaces or commas if required
				 * @param	{Function}	callback	The callback to call. Format must be function(event){ ... }
				 * @param	{Object}	scope		An optional scope in which event callbacks should run. Defaults to the current XUL instance
				 * @returns	{XUL}					The XUL dialog
				 */
				addEvent:function(ids, types, callback, scope)
				{
					// xul-level events
						if(arguments.length == 2 && typeof types == 'function')
						{
							// variables
								callback	= types;
								var type	= ids;

							// check types are valid
								if( ! /^initialize|prevalidate|postvalidate$/.test(type))
								{
									throw new Error('XUL.addEvent(): invalid event type "' +type+ '"');
								}

							// build hash if not yet exists
								if(this.events[type] == null)
								{
									this.events[type] = {};
								}

							// assign command
								this.events[type] = callback;

						}

					// control events
						else
						{
							// update "click" events to "command" events
								types	= types.replace(/click/g, 'command');

							// convert ids and types to Arrays
								ids		= ids.trim().split(/\s*,\s*/g);
								types	= types.trim().split(/\s*,\s*/g);

							// add events
								for each(var id in ids)
								{
									for each(var type in types)
									{
										// check types are valid
											if( ! /^command|change|setfocus|create$/.test(type))
											{
												throw new Error('XUL.addEvent(): invalid event type "' +type+ '"');
											}

										// build hash if not yet exists
											if(this.events[type] == null)
											{
												this.events[type] = {};
											}

										// assign command
											this.events[type][id] = callback;
									}
								}
						}
						
					// assign scope
						if(scope)
						{
							this.setEventScope(scope);
						}

					// return
						return this;
				},

				/**
				 * Set the scope in which events will run
				 * @param	{Object}	scope		The object in which you want events to be called in
				 * @returns	{XUL}					The XUL dialog
				 */
				setEventScope:function(scope)
				{
					this.scope = scope;
					return this;
				},

				/**
				 * Handles all events in the XUL dialog
				 * @param	{String}	type		The event type
				 * @param	{String}	id			The control id
				 * @private
				 */
				handleEvent:function (type, id)
				{
					// variables
						var object;
						var value;

					// debug
						//trace('Event:' + [id, type])

					// handle event
						switch(type)
						{
							// xul-level
								case 'initialize':

									// set all values
										for each(var control in this.controls)
										{
											control.update(this.settings);
										}

								case 'prevalidate':
								case 'postvalidate':
									if(this.events[type])
									{
										var callback = this.events[type];
										if(typeof callback == 'function')
										{
											var event = new XULEvent(type, null, this, fl.xmlui);
											callback.apply(this.scope || this, [event]);
										}
									}
								break;

							// create
								case 'create':

							// change, command, setfocus
								case 'change':
								case 'command':
								case 'setfocus':
									if(this.events[type] && this.events[type][id])
									{
										var callback = this.events[type][id];
										if(typeof callback == 'function')
										{
											//FIX Fix problem of colors disappearing when these commands are outside of this if() & check if adding callbacks screws it up too

											// xul control
												var control = this.controls[id];
												var event	= new XULEvent(type, control, this, fl.xmlui);

											// xmlui element
												var value	= fl.xmlui.get(id);

											// dispatch event
												//callback(control, this, fl.xmlui, type) // control, xul, xmlui, type
												callback.apply(this.scope || this, [event]);
										}
									}
								break;
						}

					// debug
						//trace('Event:' + [fl.xmlui, this, object, value, id, type])

				},

				/**
				 * Shows the XUL dialog
				 * @param	{Function}	onAccept	An optional function to run when the user presses the dialog OK button
				 * @param	{Function}	onCancel	An optional function to run when the user presses the dialog Cancel button
				 * @returns	{XUL}					The XUL dialog
				 */
				show:function(onAccept, onCancel)
				{
					// --------------------------------------------------------------------------------
					// force a document open if none is
						var $dom =fl.getDocumentDOM();

						if( ! $dom )
						{
							//fl.createDocument();
						}
						
						/*
							// can we set the AS3 timeout to longer than 15 seconds so we don't get these errors?
							
							Error: Error #1502: A script has executed for longer than the default timeout period of 15 seconds.
								at com.xjsfl.jsfl.io::JSFL$/trace()
								at Splash()
								
							PublishProfile scriptTimeLimit
								
							fl.showIdleMessage(state)
							
							Lets you disable the warning about a script running too long (pass false). You might want to do
							this when processing batch operations that take a long time to complete. To re-enable the alert,
							issue the command again, this time passing true.
							
							@see http://help.adobe.com/en_US/Flash/10.0_ExtendingFlash/WS5b3ccc516d4fbf351e63e3d118a9024f3f-7b87.html
						*/
						

					// --------------------------------------------------------------------------------
					// build and show panel

						// build XML
							if(this.built == false)
							{
								this._build();
							}

						// clear settings
							delete this.settings.dismiss;

						// show panel
							this.open		= true;
							this.accepted	= false;
							this.settings	= xjsfl.ui.show(this);
							this.open		= false;

					// --------------------------------------------------------------------------------
					// process result
					
						// kill quoted strings
						//TODO check if this is Flash or me adding the quotes
							for(var name in this.settings)
							{
								this.settings[name] = this.settings[name].replace(/^"([\s\S]*?)"$/, '$1');
							}
							
						// get control values and convert to array for callbacks
							if(onAccept || onCancel)
							{
								var args = Object.values(this.values);
							}

						// test for validation
							if(this.settings && this.settings.dismiss === 'accept')
							{
								// set accepted
									this.accepted	= true;
									
								// validate

									// prevalidate event
										this.handleEvent('prevalidate');

									// reset last error message
										this.error = null;

									// loop over controls and request validation
										for each(var control in this.controls)
										{
											var error = control.validate();
											if(error != null)
											{
												this.error = error;
												break;
											}
										}

									// postvalidate event
										this.handleEvent('postvalidate');

								// didn't validate - alert error and show again
									if(this.error)
									{
										alert(this.error);
										this.show(onAccept, onCancel);
									}

								// validated - update settings and call accept callback
									else
									{
										if(onAccept)
										{
											onAccept.apply(this, args);
										}
									}
							}

						// cancel
							else
							{
								if(onCancel)
								{
									onCancel.apply(this, args);
								}
							}

						// return
							return this;
				},

				/**
				 * Closes the dialog
				 * @param	{Boolean}	state		An optional Boolean to close and accpet (true) or cancel (unsupplied or false) the dialog
				 * @returns
				 */
				close:function(state)
				{
					state ? fl.xmlui.accept() : fl.xmlui.cancel();
				},

				/**
				 * Builds the XML for the XMLUI dialog
				 * @returns
				 */
				_build:function()
				{
					// find #controls node and add content
						if(true)
						{
							var controls	= this.xml.get('..*.(#controls)');

							// addXML内容添加
							var content		= new XMLList(this.content);
							controls.row	+= content;
						}
						// else
						// {
						// 	var xml			= this.xml.toXMLString();
						// 	xml				= xml.replace(/<(\w+) id="controls"(>\/\\1>|\/>)/, '<$1 id="controls">' +this.content+ '</$1>');
						// 	this.xml		= new XML(xml);
						// }

					// add handlers to controls
						// events
							var types =
							{
								button:			'create command',
								checkbox:		'create',
								radiogroup:		'create',
								//choosefile:		'create',
								colorchip:		'create change',
								//expression:		'create change',
								flash:			'create',
								listbox:		'create change setfocus',
								menulist:		'create change setfocus',
								popupslider:	'create',
								targetlist:		'create',
								textbox:		'create change',
								property:		'create'
							};

						// loop over types
							for(var type in types)
							{
								// variables
									var events		= types[type].split(/ /g);
									var event;
									var nodes		= this.xml.get('..' + type);
									var node;

								// for each node
									for each(node in nodes)
									{
										// id
											var id = node.@id;

										// assign handler. Note that the xulid will be assigned and the {xulid} placeholder replaced during xjsfl.ui.show()
											for each(event in events)
											{
												// Note that the window.xjsfl is needed so that the installation dialogs don't error
												node['@on' + event] = "if(window.xjsfl)xjsfl.ui.handleEvent('{xulid}', '" +event+ "', '" +id+ "');";
											}
									}
							}

					// set column widths
						for each(var label in this.xml..row.label)
						{
							label.@width = this.columns[0];
						}
						for each(var control in this.xml..row.*.(function::attribute('class') == 'control'))
						{
							control.@width = this.columns[1];
						}

					// replace separators
						var str		= this.xml.toXMLString().replace(/<row template="separator"\/>/g, this.separator);
						this.xml	= new XML(str);

					// add xulid, so we can test for existance of dialog boxes in future
						this.xml.*	+= new XML('<property id="xulid" value="{xulid}" />');

					// debug
						//trace(this.xml.toXMLString())

					// flag as built
						this.built = true;

					// return
						return this;

				},

		}

});