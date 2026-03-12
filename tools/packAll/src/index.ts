// @ts-nocheck
// import "_exports";

(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === "object" && typeof module === "object")
        module.exports = factory(require("tslib"));
    else if (typeof define === "function" && define.amd) define(["tslib"], factory);
    else if (typeof exports === "object") exports["packAll"] = factory(require("tslib"));
    else root["packAll"] = factory(root["tslib"]);
})(this, function (__WEBPACK_EXTERNAL_MODULE__652__) {
    return /******/ (function () {
        // webpackBootstrap
        /******/ "use strict";
        /******/ var __webpack_modules__ = {
            /***/ 652: /***/ function (module) {
                module.exports = __WEBPACK_EXTERNAL_MODULE__652__;

                /***/
            }

            /******/
        };
        /************************************************************************/
        /******/ // The module cache
        /******/ var __webpack_module_cache__ = {};
        /******/
        /******/ // The require function
        /******/ function __webpack_require__(moduleId) {
            /******/ // Check if module is in cache
            /******/ var cachedModule = __webpack_module_cache__[moduleId];
            /******/ if (cachedModule !== undefined) {
                /******/ return cachedModule.exports;
                /******/
            }
            /******/ // Create a new module (and put it into the cache)
            /******/ var module = (__webpack_module_cache__[moduleId] = {
                /******/ // no module.id needed
                /******/ // no module.loaded needed
                /******/ exports: {}
                /******/
            });
            /******/
            /******/ // Execute the module function
            /******/ __webpack_modules__[moduleId](
                module,
                module.exports,
                __webpack_require__
            );
            /******/
            /******/ // Return the exports of the module
            /******/ return module.exports;
            /******/
        }
        /******/
        /************************************************************************/
        /******/ /* webpack/runtime/define property getters */
        /******/ !(function () {
            /******/ // define getter functions for harmony exports
            /******/ __webpack_require__.d = function (exports, definition) {
                /******/ for (var key in definition) {
                    /******/ if (
                        __webpack_require__.o(definition, key) &&
                        !__webpack_require__.o(exports, key)
                    ) {
                        /******/ Object.defineProperty(exports, key, {
                            enumerable: true,
                            get: definition[key]
                        });
                        /******/
                    }
                    /******/
                }
                /******/
            };
            /******/
        })();
        /******/
        /******/ /* webpack/runtime/hasOwnProperty shorthand */
        /******/ !(function () {
            /******/ __webpack_require__.o = function (obj, prop) {
                return Object.prototype.hasOwnProperty.call(obj, prop);
            };
            /******/
        })();
        /******/
        /******/ /* webpack/runtime/make namespace object */
        /******/ !(function () {
            /******/ // define __esModule on exports
            /******/ __webpack_require__.r = function (exports) {
                /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                    /******/ Object.defineProperty(exports, Symbol.toStringTag, {
                        value: "Module"
                    });
                    /******/
                }
                /******/ Object.defineProperty(exports, "__esModule", { value: true });
                /******/
            };
            /******/
        })();
        /******/
        /************************************************************************/
        var __webpack_exports__ = {};
        // ESM COMPAT FLAG
        __webpack_require__.r(__webpack_exports__);

        // EXPORTS
        __webpack_require__.d(__webpack_exports__, {
            ArgumentOutOfRangeError: function () {
                return /* reexport */ ArgumentOutOfRangeError;
            },
            AsyncSubject: function () {
                return /* reexport */ AsyncSubject;
            },
            BehaviorSubject: function () {
                return /* reexport */ BehaviorSubject;
            },
            ConnectableObservable: function () {
                return /* reexport */ ConnectableObservable;
            },
            EMPTY: function () {
                return /* reexport */ EMPTY;
            },
            EmptyError: function () {
                return /* reexport */ EmptyError;
            },
            NEVER: function () {
                return /* reexport */ NEVER;
            },
            NotFoundError: function () {
                return /* reexport */ NotFoundError;
            },
            Notification: function () {
                return /* reexport */ Notification;
            },
            NotificationKind: function () {
                return /* reexport */ NotificationKind;
            },
            ObjectUnsubscribedError: function () {
                return /* reexport */ ObjectUnsubscribedError;
            },
            Observable: function () {
                return /* reexport */ Observable;
            },
            ReplaySubject: function () {
                return /* reexport */ ReplaySubject;
            },
            Scheduler: function () {
                return /* reexport */ Scheduler;
            },
            SequenceError: function () {
                return /* reexport */ SequenceError;
            },
            Subject: function () {
                return /* reexport */ Subject;
            },
            Subscriber: function () {
                return /* reexport */ Subscriber;
            },
            Subscription: function () {
                return /* reexport */ Subscription;
            },
            TimeoutError: function () {
                return /* reexport */ TimeoutError;
            },
            UnsubscriptionError: function () {
                return /* reexport */ UnsubscriptionError;
            },
            VirtualAction: function () {
                return /* reexport */ VirtualAction;
            },
            VirtualTimeScheduler: function () {
                return /* reexport */ VirtualTimeScheduler;
            },
            animationFrame: function () {
                return /* reexport */ animationFrame;
            },
            animationFrameScheduler: function () {
                return /* reexport */ animationFrameScheduler;
            },
            animationFrames: function () {
                return /* reexport */ animationFrames;
            },
            asap: function () {
                return /* reexport */ asap;
            },
            asapScheduler: function () {
                return /* reexport */ asapScheduler;
            },
            async: function () {
                return /* reexport */ async_async;
            },
            asyncScheduler: function () {
                return /* reexport */ asyncScheduler;
            },
            audit: function () {
                return /* reexport */ audit;
            },
            auditTime: function () {
                return /* reexport */ auditTime;
            },
            bindCallback: function () {
                return /* reexport */ bindCallback;
            },
            bindNodeCallback: function () {
                return /* reexport */ bindNodeCallback;
            },
            buffer: function () {
                return /* reexport */ buffer;
            },
            bufferCount: function () {
                return /* reexport */ bufferCount;
            },
            bufferTime: function () {
                return /* reexport */ bufferTime;
            },
            bufferToggle: function () {
                return /* reexport */ bufferToggle;
            },
            bufferWhen: function () {
                return /* reexport */ bufferWhen;
            },
            catchError: function () {
                return /* reexport */ catchError;
            },
            combineAll: function () {
                return /* reexport */ combineAll;
            },
            combineLatest: function () {
                return /* reexport */ combineLatest;
            },
            combineLatestAll: function () {
                return /* reexport */ combineLatestAll;
            },
            combineLatestWith: function () {
                return /* reexport */ combineLatestWith;
            },
            concat: function () {
                return /* reexport */ concat;
            },
            concatAll: function () {
                return /* reexport */ concatAll;
            },
            concatMap: function () {
                return /* reexport */ concatMap;
            },
            concatMapTo: function () {
                return /* reexport */ concatMapTo;
            },
            concatWith: function () {
                return /* reexport */ concatWith;
            },
            config: function () {
                return /* reexport */ config;
            },
            connect: function () {
                return /* reexport */ connect;
            },
            connectable: function () {
                return /* reexport */ connectable;
            },
            count: function () {
                return /* reexport */ count;
            },
            debounce: function () {
                return /* reexport */ debounce;
            },
            debounceTime: function () {
                return /* reexport */ debounceTime;
            },
            defaultIfEmpty: function () {
                return /* reexport */ defaultIfEmpty;
            },
            defer: function () {
                return /* reexport */ defer;
            },
            delay: function () {
                return /* reexport */ delay;
            },
            delayWhen: function () {
                return /* reexport */ delayWhen;
            },
            dematerialize: function () {
                return /* reexport */ dematerialize;
            },
            distinct: function () {
                return /* reexport */ distinct;
            },
            distinctUntilChanged: function () {
                return /* reexport */ distinctUntilChanged;
            },
            distinctUntilKeyChanged: function () {
                return /* reexport */ distinctUntilKeyChanged;
            },
            elementAt: function () {
                return /* reexport */ elementAt;
            },
            empty: function () {
                return /* reexport */ empty;
            },
            endWith: function () {
                return /* reexport */ endWith;
            },
            every: function () {
                return /* reexport */ every;
            },
            exhaust: function () {
                return /* reexport */ exhaust;
            },
            exhaustAll: function () {
                return /* reexport */ exhaustAll;
            },
            exhaustMap: function () {
                return /* reexport */ exhaustMap;
            },
            expand: function () {
                return /* reexport */ expand;
            },
            filter: function () {
                return /* reexport */ filter;
            },
            finalize: function () {
                return /* reexport */ finalize;
            },
            find: function () {
                return /* reexport */ find;
            },
            findIndex: function () {
                return /* reexport */ findIndex;
            },
            first: function () {
                return /* reexport */ first;
            },
            firstValueFrom: function () {
                return /* reexport */ firstValueFrom;
            },
            flatMap: function () {
                return /* reexport */ flatMap;
            },
            forkJoin: function () {
                return /* reexport */ forkJoin;
            },
            from: function () {
                return /* reexport */ from;
            },
            fromEvent: function () {
                return /* reexport */ fromEvent;
            },
            fromEventPattern: function () {
                return /* reexport */ fromEventPattern;
            },
            generate: function () {
                return /* reexport */ generate;
            },
            groupBy: function () {
                return /* reexport */ groupBy;
            },
            identity: function () {
                return /* reexport */ identity;
            },
            ignoreElements: function () {
                return /* reexport */ ignoreElements;
            },
            iif: function () {
                return /* reexport */ iif;
            },
            interval: function () {
                return /* reexport */ interval;
            },
            isEmpty: function () {
                return /* reexport */ isEmpty;
            },
            isObservable: function () {
                return /* reexport */ isObservable;
            },
            last: function () {
                return /* reexport */ last_last;
            },
            lastValueFrom: function () {
                return /* reexport */ lastValueFrom;
            },
            map: function () {
                return /* reexport */ map;
            },
            mapTo: function () {
                return /* reexport */ mapTo;
            },
            materialize: function () {
                return /* reexport */ materialize;
            },
            max: function () {
                return /* reexport */ max;
            },
            merge: function () {
                return /* reexport */ merge;
            },
            mergeAll: function () {
                return /* reexport */ mergeAll;
            },
            mergeMap: function () {
                return /* reexport */ mergeMap;
            },
            mergeMapTo: function () {
                return /* reexport */ mergeMapTo;
            },
            mergeScan: function () {
                return /* reexport */ mergeScan;
            },
            mergeWith: function () {
                return /* reexport */ mergeWith;
            },
            min: function () {
                return /* reexport */ min;
            },
            multicast: function () {
                return /* reexport */ multicast;
            },
            never: function () {
                return /* reexport */ never;
            },
            noop: function () {
                return /* reexport */ noop;
            },
            observable: function () {
                return /* reexport */ observable;
            },
            observeOn: function () {
                return /* reexport */ observeOn;
            },
            of: function () {
                return /* reexport */ of;
            },
            onErrorResumeNext: function () {
                return /* reexport */ onErrorResumeNext;
            },
            onErrorResumeNextWith: function () {
                return /* reexport */ onErrorResumeNextWith;
            },
            pairs: function () {
                return /* reexport */ pairs;
            },
            pairwise: function () {
                return /* reexport */ pairwise;
            },
            partition: function () {
                return /* reexport */ partition;
            },
            pipe: function () {
                return /* reexport */ pipe;
            },
            pluck: function () {
                return /* reexport */ pluck;
            },
            publish: function () {
                return /* reexport */ publish;
            },
            publishBehavior: function () {
                return /* reexport */ publishBehavior;
            },
            publishLast: function () {
                return /* reexport */ publishLast;
            },
            publishReplay: function () {
                return /* reexport */ publishReplay;
            },
            queue: function () {
                return /* reexport */ queue;
            },
            queueScheduler: function () {
                return /* reexport */ queueScheduler;
            },
            race: function () {
                return /* reexport */ race;
            },
            raceWith: function () {
                return /* reexport */ raceWith;
            },
            range: function () {
                return /* reexport */ range;
            },
            reduce: function () {
                return /* reexport */ reduce;
            },
            refCount: function () {
                return /* reexport */ refCount;
            },
            repeat: function () {
                return /* reexport */ repeat;
            },
            repeatWhen: function () {
                return /* reexport */ repeatWhen;
            },
            retry: function () {
                return /* reexport */ retry;
            },
            retryWhen: function () {
                return /* reexport */ retryWhen;
            },
            sample: function () {
                return /* reexport */ sample;
            },
            sampleTime: function () {
                return /* reexport */ sampleTime;
            },
            scan: function () {
                return /* reexport */ scan;
            },
            scheduled: function () {
                return /* reexport */ scheduled;
            },
            sequenceEqual: function () {
                return /* reexport */ sequenceEqual;
            },
            share: function () {
                return /* reexport */ share;
            },
            shareReplay: function () {
                return /* reexport */ shareReplay;
            },
            single: function () {
                return /* reexport */ single;
            },
            skip: function () {
                return /* reexport */ skip;
            },
            skipLast: function () {
                return /* reexport */ skipLast;
            },
            skipUntil: function () {
                return /* reexport */ skipUntil;
            },
            skipWhile: function () {
                return /* reexport */ skipWhile;
            },
            startWith: function () {
                return /* reexport */ startWith;
            },
            subscribeOn: function () {
                return /* reexport */ subscribeOn;
            },
            switchAll: function () {
                return /* reexport */ switchAll;
            },
            switchMap: function () {
                return /* reexport */ switchMap;
            },
            switchMapTo: function () {
                return /* reexport */ switchMapTo;
            },
            switchScan: function () {
                return /* reexport */ switchScan;
            },
            take: function () {
                return /* reexport */ take;
            },
            takeLast: function () {
                return /* reexport */ takeLast;
            },
            takeUntil: function () {
                return /* reexport */ takeUntil;
            },
            takeWhile: function () {
                return /* reexport */ takeWhile;
            },
            tap: function () {
                return /* reexport */ tap;
            },
            throttle: function () {
                return /* reexport */ throttle;
            },
            throttleTime: function () {
                return /* reexport */ throttleTime;
            },
            throwError: function () {
                return /* reexport */ throwError;
            },
            throwIfEmpty: function () {
                return /* reexport */ throwIfEmpty;
            },
            timeInterval: function () {
                return /* reexport */ timeInterval;
            },
            timeout: function () {
                return /* reexport */ timeout;
            },
            timeoutWith: function () {
                return /* reexport */ timeoutWith;
            },
            timer: function () {
                return /* reexport */ timer;
            },
            timestamp: function () {
                return /* reexport */ timestamp;
            },
            toArray: function () {
                return /* reexport */ toArray;
            },
            using: function () {
                return /* reexport */ using;
            },
            window: function () {
                return /* reexport */ window_window;
            },
            windowCount: function () {
                return /* reexport */ windowCount;
            },
            windowTime: function () {
                return /* reexport */ windowTime;
            },
            windowToggle: function () {
                return /* reexport */ windowToggle;
            },
            windowWhen: function () {
                return /* reexport */ windowWhen;
            },
            withLatestFrom: function () {
                return /* reexport */ withLatestFrom;
            },
            zip: function () {
                return /* reexport */ zip;
            },
            zipAll: function () {
                return /* reexport */ zipAll;
            },
            zipWith: function () {
                return /* reexport */ zipWith;
            }
        }); // ./src/esm/internal/util/isFunction.js

        function isFunction(value) {
            return typeof value === "function";
        } // ./src/esm/internal/util/createErrorClass.js
        //# sourceMappingURL=isFunction.js.map
        function createErrorClass(createImpl) {
            const _super = (instance) => {
                Error.call(instance);
                instance.stack = new Error().stack;
            };
            const ctorFunc = createImpl(_super);
            ctorFunc.prototype = Object.create(Error.prototype);
            ctorFunc.prototype.constructor = ctorFunc;
            return ctorFunc;
        } // ./src/esm/internal/util/UnsubscriptionError.js
        //# sourceMappingURL=createErrorClass.js.map
        const UnsubscriptionError = createErrorClass(
            (_super) =>
                function UnsubscriptionErrorImpl(errors) {
                    _super(this);
                    this.message = errors
                        ? `${errors.length} errors occurred during unsubscription:
${errors.map((err, i) => `${i + 1}) ${err.toString()}`).join("\n  ")}`
                        : "";
                    this.name = "UnsubscriptionError";
                    this.errors = errors;
                }
        ); // ./src/esm/internal/util/arrRemove.js
        //# sourceMappingURL=UnsubscriptionError.js.map
        function arrRemove(arr, item) {
            if (arr) {
                const index = arr.indexOf(item);
                0 <= index && arr.splice(index, 1);
            }
        } // ./src/esm/internal/Subscription.js
        //# sourceMappingURL=arrRemove.js.map
        class Subscription {
            constructor(initialTeardown) {
                this.initialTeardown = initialTeardown;
                this.closed = false;
                this._parentage = null;
                this._finalizers = null;
            }
            unsubscribe() {
                let errors;
                if (!this.closed) {
                    this.closed = true;
                    const { _parentage } = this;
                    if (_parentage) {
                        this._parentage = null;
                        if (Array.isArray(_parentage)) {
                            for (const parent of _parentage) {
                                parent.remove(this);
                            }
                        } else {
                            _parentage.remove(this);
                        }
                    }
                    const { initialTeardown: initialFinalizer } = this;
                    if (isFunction(initialFinalizer)) {
                        try {
                            initialFinalizer();
                        } catch (e) {
                            errors = e instanceof UnsubscriptionError ? e.errors : [e];
                        }
                    }
                    const { _finalizers } = this;
                    if (_finalizers) {
                        this._finalizers = null;
                        for (const finalizer of _finalizers) {
                            try {
                                execFinalizer(finalizer);
                            } catch (err) {
                                errors =
                                    errors !== null && errors !== void 0 ? errors : [];
                                if (err instanceof UnsubscriptionError) {
                                    errors = [...errors, ...err.errors];
                                } else {
                                    errors.push(err);
                                }
                            }
                        }
                    }
                    if (errors) {
                        throw new UnsubscriptionError(errors);
                    }
                }
            }
            add(teardown) {
                var _a;
                if (teardown && teardown !== this) {
                    if (this.closed) {
                        execFinalizer(teardown);
                    } else {
                        if (teardown instanceof Subscription) {
                            if (teardown.closed || teardown._hasParent(this)) {
                                return;
                            }
                            teardown._addParent(this);
                        }
                        (this._finalizers =
                            (_a = this._finalizers) !== null && _a !== void 0
                                ? _a
                                : []).push(teardown);
                    }
                }
            }
            _hasParent(parent) {
                const { _parentage } = this;
                return (
                    _parentage === parent ||
                    (Array.isArray(_parentage) && _parentage.includes(parent))
                );
            }
            _addParent(parent) {
                const { _parentage } = this;
                this._parentage = Array.isArray(_parentage)
                    ? (_parentage.push(parent), _parentage)
                    : _parentage
                      ? [_parentage, parent]
                      : parent;
            }
            _removeParent(parent) {
                const { _parentage } = this;
                if (_parentage === parent) {
                    this._parentage = null;
                } else if (Array.isArray(_parentage)) {
                    arrRemove(_parentage, parent);
                }
            }
            remove(teardown) {
                const { _finalizers } = this;
                _finalizers && arrRemove(_finalizers, teardown);
                if (teardown instanceof Subscription) {
                    teardown._removeParent(this);
                }
            }
        }
        Subscription.EMPTY = (() => {
            const empty = new Subscription();
            empty.closed = true;
            return empty;
        })();
        const EMPTY_SUBSCRIPTION = Subscription.EMPTY;
        function isSubscription(value) {
            return (
                value instanceof Subscription ||
                (value &&
                    "closed" in value &&
                    isFunction(value.remove) &&
                    isFunction(value.add) &&
                    isFunction(value.unsubscribe))
            );
        }
        function execFinalizer(finalizer) {
            if (isFunction(finalizer)) {
                finalizer();
            } else {
                finalizer.unsubscribe();
            }
        } // ./src/esm/internal/config.js
        //# sourceMappingURL=Subscription.js.map
        const config = {
            onUnhandledError: null,
            onStoppedNotification: null,
            Promise: undefined,
            useDeprecatedSynchronousErrorHandling: false,
            useDeprecatedNextContext: false
        }; // ./src/esm/internal/scheduler/timeoutProvider.js
        //# sourceMappingURL=config.js.map
        const timeoutProvider = {
            setTimeout(handler, timeout, ...args) {
                const { delegate } = timeoutProvider;
                if (
                    delegate === null || delegate === void 0
                        ? void 0
                        : delegate.setTimeout
                ) {
                    return delegate.setTimeout(handler, timeout, ...args);
                }
                return setTimeout(handler, timeout, ...args);
            },
            clearTimeout(handle) {
                const { delegate } = timeoutProvider;
                return (
                    (delegate === null || delegate === void 0
                        ? void 0
                        : delegate.clearTimeout) || clearTimeout
                )(handle);
            },
            delegate: undefined
        }; // ./src/esm/internal/util/reportUnhandledError.js
        //# sourceMappingURL=timeoutProvider.js.map
        function reportUnhandledError(err) {
            timeoutProvider.setTimeout(() => {
                const { onUnhandledError } = config;
                if (onUnhandledError) {
                    onUnhandledError(err);
                } else {
                    throw err;
                }
            });
        } // ./src/esm/internal/util/noop.js
        //# sourceMappingURL=reportUnhandledError.js.map
        function noop() {} // ./src/esm/internal/NotificationFactories.js
        //# sourceMappingURL=noop.js.map
        const COMPLETE_NOTIFICATION = (() =>
            createNotification("C", undefined, undefined))();
        function errorNotification(error) {
            return createNotification("E", undefined, error);
        }
        function nextNotification(value) {
            return createNotification("N", value, undefined);
        }
        function createNotification(kind, value, error) {
            return {
                kind,
                value,
                error
            };
        } // ./src/esm/internal/util/errorContext.js
        //# sourceMappingURL=NotificationFactories.js.map
        let context = null;
        function errorContext(cb) {
            if (config.useDeprecatedSynchronousErrorHandling) {
                const isRoot = !context;
                if (isRoot) {
                    context = { errorThrown: false, error: null };
                }
                cb();
                if (isRoot) {
                    const { errorThrown, error } = context;
                    context = null;
                    if (errorThrown) {
                        throw error;
                    }
                }
            } else {
                cb();
            }
        }
        function captureError(err) {
            if (config.useDeprecatedSynchronousErrorHandling && context) {
                context.errorThrown = true;
                context.error = err;
            }
        } // ./src/esm/internal/Subscriber.js
        //# sourceMappingURL=errorContext.js.map
        class Subscriber extends Subscription {
            constructor(destination) {
                super();
                this.isStopped = false;
                if (destination) {
                    this.destination = destination;
                    if (isSubscription(destination)) {
                        destination.add(this);
                    }
                } else {
                    this.destination = EMPTY_OBSERVER;
                }
            }
            static create(next, error, complete) {
                return new SafeSubscriber(next, error, complete);
            }
            next(value) {
                if (this.isStopped) {
                    handleStoppedNotification(nextNotification(value), this);
                } else {
                    this._next(value);
                }
            }
            error(err) {
                if (this.isStopped) {
                    handleStoppedNotification(errorNotification(err), this);
                } else {
                    this.isStopped = true;
                    this._error(err);
                }
            }
            complete() {
                if (this.isStopped) {
                    handleStoppedNotification(COMPLETE_NOTIFICATION, this);
                } else {
                    this.isStopped = true;
                    this._complete();
                }
            }
            unsubscribe() {
                if (!this.closed) {
                    this.isStopped = true;
                    super.unsubscribe();
                    this.destination = null;
                }
            }
            _next(value) {
                this.destination.next(value);
            }
            _error(err) {
                try {
                    this.destination.error(err);
                } finally {
                    this.unsubscribe();
                }
            }
            _complete() {
                try {
                    this.destination.complete();
                } finally {
                    this.unsubscribe();
                }
            }
        }
        const _bind = Function.prototype.bind;
        function bind(fn, thisArg) {
            return _bind.call(fn, thisArg);
        }
        class ConsumerObserver {
            constructor(partialObserver) {
                this.partialObserver = partialObserver;
            }
            next(value) {
                const { partialObserver } = this;
                if (partialObserver.next) {
                    try {
                        partialObserver.next(value);
                    } catch (error) {
                        handleUnhandledError(error);
                    }
                }
            }
            error(err) {
                const { partialObserver } = this;
                if (partialObserver.error) {
                    try {
                        partialObserver.error(err);
                    } catch (error) {
                        handleUnhandledError(error);
                    }
                } else {
                    handleUnhandledError(err);
                }
            }
            complete() {
                const { partialObserver } = this;
                if (partialObserver.complete) {
                    try {
                        partialObserver.complete();
                    } catch (error) {
                        handleUnhandledError(error);
                    }
                }
            }
        }
        class SafeSubscriber extends Subscriber {
            constructor(observerOrNext, error, complete) {
                super();
                let partialObserver;
                if (isFunction(observerOrNext) || !observerOrNext) {
                    partialObserver = {
                        next:
                            observerOrNext !== null && observerOrNext !== void 0
                                ? observerOrNext
                                : undefined,
                        error: error !== null && error !== void 0 ? error : undefined,
                        complete:
                            complete !== null && complete !== void 0
                                ? complete
                                : undefined
                    };
                } else {
                    let context;
                    if (this && config.useDeprecatedNextContext) {
                        context = Object.create(observerOrNext);
                        context.unsubscribe = () => this.unsubscribe();
                        partialObserver = {
                            next:
                                observerOrNext.next && bind(observerOrNext.next, context),
                            error:
                                observerOrNext.error &&
                                bind(observerOrNext.error, context),
                            complete:
                                observerOrNext.complete &&
                                bind(observerOrNext.complete, context)
                        };
                    } else {
                        partialObserver = observerOrNext;
                    }
                }
                this.destination = new ConsumerObserver(partialObserver);
            }
        }
        function handleUnhandledError(error) {
            if (config.useDeprecatedSynchronousErrorHandling) {
                captureError(error);
            } else {
                reportUnhandledError(error);
            }
        }
        function defaultErrorHandler(err) {
            throw err;
        }
        function handleStoppedNotification(notification, subscriber) {
            const { onStoppedNotification } = config;
            onStoppedNotification &&
                timeoutProvider.setTimeout(() =>
                    onStoppedNotification(notification, subscriber)
                );
        }
        const EMPTY_OBSERVER = {
            closed: true,
            next: noop,
            error: defaultErrorHandler,
            complete: noop
        }; // ./src/esm/internal/symbol/observable.js
        //# sourceMappingURL=Subscriber.js.map
        const observable = (() =>
            (typeof Symbol === "function" && Symbol.observable) || "@@observable")(); // ./src/esm/internal/util/identity.js
        //# sourceMappingURL=observable.js.map
        function identity(x) {
            return x;
        } // ./src/esm/internal/util/pipe.js
        //# sourceMappingURL=identity.js.map
        function pipe(...fns) {
            return pipeFromArray(fns);
        }
        function pipeFromArray(fns) {
            if (fns.length === 0) {
                return identity;
            }
            if (fns.length === 1) {
                return fns[0];
            }
            return function piped(input) {
                return fns.reduce((prev, fn) => fn(prev), input);
            };
        } // ./src/esm/internal/Observable.js
        //# sourceMappingURL=pipe.js.map
        class Observable {
            constructor(subscribe) {
                if (subscribe) {
                    this._subscribe = subscribe;
                }
            }
            lift(operator) {
                const observable = new Observable();
                observable.source = this;
                observable.operator = operator;
                return observable;
            }
            subscribe(observerOrNext, error, complete) {
                const subscriber = isSubscriber(observerOrNext)
                    ? observerOrNext
                    : new SafeSubscriber(observerOrNext, error, complete);
                errorContext(() => {
                    const { operator, source } = this;
                    subscriber.add(
                        operator
                            ? operator.call(subscriber, source)
                            : source
                              ? this._subscribe(subscriber)
                              : this._trySubscribe(subscriber)
                    );
                });
                return subscriber;
            }
            _trySubscribe(sink) {
                try {
                    return this._subscribe(sink);
                } catch (err) {
                    sink.error(err);
                }
            }
            forEach(next, promiseCtor) {
                promiseCtor = getPromiseCtor(promiseCtor);
                return new promiseCtor((resolve, reject) => {
                    const subscriber = new SafeSubscriber({
                        next: (value) => {
                            try {
                                next(value);
                            } catch (err) {
                                reject(err);
                                subscriber.unsubscribe();
                            }
                        },
                        error: reject,
                        complete: resolve
                    });
                    this.subscribe(subscriber);
                });
            }
            _subscribe(subscriber) {
                var _a;
                return (_a = this.source) === null || _a === void 0
                    ? void 0
                    : _a.subscribe(subscriber);
            }
            [observable]() {
                return this;
            }
            pipe(...operations) {
                return pipeFromArray(operations)(this);
            }
            toPromise(promiseCtor) {
                promiseCtor = getPromiseCtor(promiseCtor);
                return new promiseCtor((resolve, reject) => {
                    let value;
                    this.subscribe(
                        (x) => (value = x),
                        (err) => reject(err),
                        () => resolve(value)
                    );
                });
            }
        }
        Observable.create = (subscribe) => {
            return new Observable(subscribe);
        };
        function getPromiseCtor(promiseCtor) {
            var _a;
            return (_a =
                promiseCtor !== null && promiseCtor !== void 0
                    ? promiseCtor
                    : config.Promise) !== null && _a !== void 0
                ? _a
                : Promise;
        }
        function isObserver(value) {
            return (
                value &&
                isFunction(value.next) &&
                isFunction(value.error) &&
                isFunction(value.complete)
            );
        }
        function isSubscriber(value) {
            return (
                (value && value instanceof Subscriber) ||
                (isObserver(value) && isSubscription(value))
            );
        } // ./src/esm/internal/util/lift.js
        //# sourceMappingURL=Observable.js.map
        function hasLift(source) {
            return isFunction(
                source === null || source === void 0 ? void 0 : source.lift
            );
        }
        function operate(init) {
            return (source) => {
                if (hasLift(source)) {
                    return source.lift(function (liftedSource) {
                        try {
                            return init(liftedSource, this);
                        } catch (err) {
                            this.error(err);
                        }
                    });
                }
                throw new TypeError("Unable to lift unknown Observable type");
            };
        } // ./src/esm/internal/operators/OperatorSubscriber.js
        //# sourceMappingURL=lift.js.map
        function createOperatorSubscriber(
            destination,
            onNext,
            onComplete,
            onError,
            onFinalize
        ) {
            return new OperatorSubscriber(
                destination,
                onNext,
                onComplete,
                onError,
                onFinalize
            );
        }
        class OperatorSubscriber extends Subscriber {
            constructor(
                destination,
                onNext,
                onComplete,
                onError,
                onFinalize,
                shouldUnsubscribe
            ) {
                super(destination);
                this.onFinalize = onFinalize;
                this.shouldUnsubscribe = shouldUnsubscribe;
                this._next = onNext
                    ? function (value) {
                          try {
                              onNext(value);
                          } catch (err) {
                              destination.error(err);
                          }
                      }
                    : super._next;
                this._error = onError
                    ? function (err) {
                          try {
                              onError(err);
                          } catch (err) {
                              destination.error(err);
                          } finally {
                              this.unsubscribe();
                          }
                      }
                    : super._error;
                this._complete = onComplete
                    ? function () {
                          try {
                              onComplete();
                          } catch (err) {
                              destination.error(err);
                          } finally {
                              this.unsubscribe();
                          }
                      }
                    : super._complete;
            }
            unsubscribe() {
                var _a;
                if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
                    const { closed } = this;
                    super.unsubscribe();
                    !closed &&
                        ((_a = this.onFinalize) === null || _a === void 0
                            ? void 0
                            : _a.call(this));
                }
            }
        } // ./src/esm/internal/operators/refCount.js
        //# sourceMappingURL=OperatorSubscriber.js.map
        function refCount() {
            return operate((source, subscriber) => {
                let connection = null;
                source._refCount++;
                const refCounter = createOperatorSubscriber(
                    subscriber,
                    undefined,
                    undefined,
                    undefined,
                    () => {
                        if (!source || source._refCount <= 0 || 0 < --source._refCount) {
                            connection = null;
                            return;
                        }
                        const sharedConnection = source._connection;
                        const conn = connection;
                        connection = null;
                        if (sharedConnection && (!conn || sharedConnection === conn)) {
                            sharedConnection.unsubscribe();
                        }
                        subscriber.unsubscribe();
                    }
                );
                source.subscribe(refCounter);
                if (!refCounter.closed) {
                    connection = source.connect();
                }
            });
        } // ./src/esm/internal/observable/ConnectableObservable.js
        //# sourceMappingURL=refCount.js.map
        class ConnectableObservable extends Observable {
            constructor(source, subjectFactory) {
                super();
                this.source = source;
                this.subjectFactory = subjectFactory;
                this._subject = null;
                this._refCount = 0;
                this._connection = null;
                if (hasLift(source)) {
                    this.lift = source.lift;
                }
            }
            _subscribe(subscriber) {
                return this.getSubject().subscribe(subscriber);
            }
            getSubject() {
                const subject = this._subject;
                if (!subject || subject.isStopped) {
                    this._subject = this.subjectFactory();
                }
                return this._subject;
            }
            _teardown() {
                this._refCount = 0;
                const { _connection } = this;
                this._subject = this._connection = null;
                _connection === null || _connection === void 0
                    ? void 0
                    : _connection.unsubscribe();
            }
            connect() {
                let connection = this._connection;
                if (!connection) {
                    connection = this._connection = new Subscription();
                    const subject = this.getSubject();
                    connection.add(
                        this.source.subscribe(
                            createOperatorSubscriber(
                                subject,
                                undefined,
                                () => {
                                    this._teardown();
                                    subject.complete();
                                },
                                (err) => {
                                    this._teardown();
                                    subject.error(err);
                                },
                                () => this._teardown()
                            )
                        )
                    );
                    if (connection.closed) {
                        this._connection = null;
                        connection = Subscription.EMPTY;
                    }
                }
                return connection;
            }
            refCount() {
                return refCount()(this);
            }
        } // ./src/esm/internal/scheduler/performanceTimestampProvider.js
        //# sourceMappingURL=ConnectableObservable.js.map
        const performanceTimestampProvider = {
            now() {
                return (performanceTimestampProvider.delegate || performance).now();
            },
            delegate: undefined
        }; // ./src/esm/internal/scheduler/animationFrameProvider.js
        //# sourceMappingURL=performanceTimestampProvider.js.map
        const animationFrameProvider = {
            schedule(callback) {
                let request = requestAnimationFrame;
                let cancel = cancelAnimationFrame;
                const { delegate } = animationFrameProvider;
                if (delegate) {
                    request = delegate.requestAnimationFrame;
                    cancel = delegate.cancelAnimationFrame;
                }
                const handle = request((timestamp) => {
                    cancel = undefined;
                    callback(timestamp);
                });
                return new Subscription(() =>
                    cancel === null || cancel === void 0 ? void 0 : cancel(handle)
                );
            },
            requestAnimationFrame(...args) {
                const { delegate } = animationFrameProvider;
                return (
                    (delegate === null || delegate === void 0
                        ? void 0
                        : delegate.requestAnimationFrame) || requestAnimationFrame
                )(...args);
            },
            cancelAnimationFrame(...args) {
                const { delegate } = animationFrameProvider;
                return (
                    (delegate === null || delegate === void 0
                        ? void 0
                        : delegate.cancelAnimationFrame) || cancelAnimationFrame
                )(...args);
            },
            delegate: undefined
        }; // ./src/esm/internal/observable/dom/animationFrames.js
        //# sourceMappingURL=animationFrameProvider.js.map
        function animationFrames(timestampProvider) {
            return timestampProvider
                ? animationFramesFactory(timestampProvider)
                : DEFAULT_ANIMATION_FRAMES;
        }
        function animationFramesFactory(timestampProvider) {
            return new Observable((subscriber) => {
                const provider = timestampProvider || performanceTimestampProvider;
                const start = provider.now();
                let id = 0;
                const run = () => {
                    if (!subscriber.closed) {
                        id = animationFrameProvider.requestAnimationFrame((timestamp) => {
                            id = 0;
                            const now = provider.now();
                            subscriber.next({
                                timestamp: timestampProvider ? now : timestamp,
                                elapsed: now - start
                            });
                            run();
                        });
                    }
                };
                run();
                return () => {
                    if (id) {
                        animationFrameProvider.cancelAnimationFrame(id);
                    }
                };
            });
        }
        const DEFAULT_ANIMATION_FRAMES = animationFramesFactory(); // ./src/esm/internal/util/ObjectUnsubscribedError.js
        //# sourceMappingURL=animationFrames.js.map
        const ObjectUnsubscribedError = createErrorClass(
            (_super) =>
                function ObjectUnsubscribedErrorImpl() {
                    _super(this);
                    this.name = "ObjectUnsubscribedError";
                    this.message = "object unsubscribed";
                }
        ); // ./src/esm/internal/Subject.js
        //# sourceMappingURL=ObjectUnsubscribedError.js.map
        class Subject extends Observable {
            constructor() {
                super();
                this.closed = false;
                this.currentObservers = null;
                this.observers = [];
                this.isStopped = false;
                this.hasError = false;
                this.thrownError = null;
            }
            lift(operator) {
                const subject = new AnonymousSubject(this, this);
                subject.operator = operator;
                return subject;
            }
            _throwIfClosed() {
                if (this.closed) {
                    throw new ObjectUnsubscribedError();
                }
            }
            next(value) {
                errorContext(() => {
                    this._throwIfClosed();
                    if (!this.isStopped) {
                        if (!this.currentObservers) {
                            this.currentObservers = Array.from(this.observers);
                        }
                        for (const observer of this.currentObservers) {
                            observer.next(value);
                        }
                    }
                });
            }
            error(err) {
                errorContext(() => {
                    this._throwIfClosed();
                    if (!this.isStopped) {
                        this.hasError = this.isStopped = true;
                        this.thrownError = err;
                        const { observers } = this;
                        while (observers.length) {
                            observers.shift().error(err);
                        }
                    }
                });
            }
            complete() {
                errorContext(() => {
                    this._throwIfClosed();
                    if (!this.isStopped) {
                        this.isStopped = true;
                        const { observers } = this;
                        while (observers.length) {
                            observers.shift().complete();
                        }
                    }
                });
            }
            unsubscribe() {
                this.isStopped = this.closed = true;
                this.observers = this.currentObservers = null;
            }
            get observed() {
                var _a;
                return (
                    ((_a = this.observers) === null || _a === void 0
                        ? void 0
                        : _a.length) > 0
                );
            }
            _trySubscribe(subscriber) {
                this._throwIfClosed();
                return super._trySubscribe(subscriber);
            }
            _subscribe(subscriber) {
                this._throwIfClosed();
                this._checkFinalizedStatuses(subscriber);
                return this._innerSubscribe(subscriber);
            }
            _innerSubscribe(subscriber) {
                const { hasError, isStopped, observers } = this;
                if (hasError || isStopped) {
                    return EMPTY_SUBSCRIPTION;
                }
                this.currentObservers = null;
                observers.push(subscriber);
                return new Subscription(() => {
                    this.currentObservers = null;
                    arrRemove(observers, subscriber);
                });
            }
            _checkFinalizedStatuses(subscriber) {
                const { hasError, thrownError, isStopped } = this;
                if (hasError) {
                    subscriber.error(thrownError);
                } else if (isStopped) {
                    subscriber.complete();
                }
            }
            asObservable() {
                const observable = new Observable();
                observable.source = this;
                return observable;
            }
        }
        Subject.create = (destination, source) => {
            return new AnonymousSubject(destination, source);
        };
        class AnonymousSubject extends Subject {
            constructor(destination, source) {
                super();
                this.destination = destination;
                this.source = source;
            }
            next(value) {
                var _a, _b;
                (_b =
                    (_a = this.destination) === null || _a === void 0
                        ? void 0
                        : _a.next) === null || _b === void 0
                    ? void 0
                    : _b.call(_a, value);
            }
            error(err) {
                var _a, _b;
                (_b =
                    (_a = this.destination) === null || _a === void 0
                        ? void 0
                        : _a.error) === null || _b === void 0
                    ? void 0
                    : _b.call(_a, err);
            }
            complete() {
                var _a, _b;
                (_b =
                    (_a = this.destination) === null || _a === void 0
                        ? void 0
                        : _a.complete) === null || _b === void 0
                    ? void 0
                    : _b.call(_a);
            }
            _subscribe(subscriber) {
                var _a, _b;
                return (_b =
                    (_a = this.source) === null || _a === void 0
                        ? void 0
                        : _a.subscribe(subscriber)) !== null && _b !== void 0
                    ? _b
                    : EMPTY_SUBSCRIPTION;
            }
        } // ./src/esm/internal/BehaviorSubject.js
        //# sourceMappingURL=Subject.js.map
        class BehaviorSubject extends Subject {
            constructor(_value) {
                super();
                this._value = _value;
            }
            get value() {
                return this.getValue();
            }
            _subscribe(subscriber) {
                const subscription = super._subscribe(subscriber);
                !subscription.closed && subscriber.next(this._value);
                return subscription;
            }
            getValue() {
                const { hasError, thrownError, _value } = this;
                if (hasError) {
                    throw thrownError;
                }
                this._throwIfClosed();
                return _value;
            }
            next(value) {
                super.next((this._value = value));
            }
        } // ./src/esm/internal/scheduler/dateTimestampProvider.js
        //# sourceMappingURL=BehaviorSubject.js.map
        const dateTimestampProvider = {
            now() {
                return (dateTimestampProvider.delegate || Date).now();
            },
            delegate: undefined
        }; // ./src/esm/internal/ReplaySubject.js
        //# sourceMappingURL=dateTimestampProvider.js.map
        class ReplaySubject extends Subject {
            constructor(
                _bufferSize = Infinity,
                _windowTime = Infinity,
                _timestampProvider = dateTimestampProvider
            ) {
                super();
                this._bufferSize = _bufferSize;
                this._windowTime = _windowTime;
                this._timestampProvider = _timestampProvider;
                this._buffer = [];
                this._infiniteTimeWindow = true;
                this._infiniteTimeWindow = _windowTime === Infinity;
                this._bufferSize = Math.max(1, _bufferSize);
                this._windowTime = Math.max(1, _windowTime);
            }
            next(value) {
                const {
                    isStopped,
                    _buffer,
                    _infiniteTimeWindow,
                    _timestampProvider,
                    _windowTime
                } = this;
                if (!isStopped) {
                    _buffer.push(value);
                    !_infiniteTimeWindow &&
                        _buffer.push(_timestampProvider.now() + _windowTime);
                }
                this._trimBuffer();
                super.next(value);
            }
            _subscribe(subscriber) {
                this._throwIfClosed();
                this._trimBuffer();
                const subscription = this._innerSubscribe(subscriber);
                const { _infiniteTimeWindow, _buffer } = this;
                const copy = _buffer.slice();
                for (
                    let i = 0;
                    i < copy.length && !subscriber.closed;
                    i += _infiniteTimeWindow ? 1 : 2
                ) {
                    subscriber.next(copy[i]);
                }
                this._checkFinalizedStatuses(subscriber);
                return subscription;
            }
            _trimBuffer() {
                const { _bufferSize, _timestampProvider, _buffer, _infiniteTimeWindow } =
                    this;
                const adjustedBufferSize = (_infiniteTimeWindow ? 1 : 2) * _bufferSize;
                _bufferSize < Infinity &&
                    adjustedBufferSize < _buffer.length &&
                    _buffer.splice(0, _buffer.length - adjustedBufferSize);
                if (!_infiniteTimeWindow) {
                    const now = _timestampProvider.now();
                    let last = 0;
                    for (let i = 1; i < _buffer.length && _buffer[i] <= now; i += 2) {
                        last = i;
                    }
                    last && _buffer.splice(0, last + 1);
                }
            }
        } // ./src/esm/internal/AsyncSubject.js
        //# sourceMappingURL=ReplaySubject.js.map
        class AsyncSubject extends Subject {
            constructor() {
                super(...arguments);
                this._value = null;
                this._hasValue = false;
                this._isComplete = false;
            }
            _checkFinalizedStatuses(subscriber) {
                const {
                    hasError,
                    _hasValue,
                    _value,
                    thrownError,
                    isStopped,
                    _isComplete
                } = this;
                if (hasError) {
                    subscriber.error(thrownError);
                } else if (isStopped || _isComplete) {
                    _hasValue && subscriber.next(_value);
                    subscriber.complete();
                }
            }
            next(value) {
                if (!this.isStopped) {
                    this._value = value;
                    this._hasValue = true;
                }
            }
            complete() {
                const { _hasValue, _value, _isComplete } = this;
                if (!_isComplete) {
                    this._isComplete = true;
                    _hasValue && super.next(_value);
                    super.complete();
                }
            }
        } // ./src/esm/internal/scheduler/Action.js
        //# sourceMappingURL=AsyncSubject.js.map
        class Action extends Subscription {
            constructor(scheduler, work) {
                super();
            }
            schedule(state, delay = 0) {
                return this;
            }
        } // ./src/esm/internal/scheduler/intervalProvider.js
        //# sourceMappingURL=Action.js.map
        const intervalProvider = {
            setInterval(handler, timeout, ...args) {
                const { delegate } = intervalProvider;
                if (
                    delegate === null || delegate === void 0
                        ? void 0
                        : delegate.setInterval
                ) {
                    return delegate.setInterval(handler, timeout, ...args);
                }
                return setInterval(handler, timeout, ...args);
            },
            clearInterval(handle) {
                const { delegate } = intervalProvider;
                return (
                    (delegate === null || delegate === void 0
                        ? void 0
                        : delegate.clearInterval) || clearInterval
                )(handle);
            },
            delegate: undefined
        }; // ./src/esm/internal/scheduler/AsyncAction.js
        //# sourceMappingURL=intervalProvider.js.map
        class AsyncAction extends Action {
            constructor(scheduler, work) {
                super(scheduler, work);
                this.scheduler = scheduler;
                this.work = work;
                this.pending = false;
            }
            schedule(state, delay = 0) {
                var _a;
                if (this.closed) {
                    return this;
                }
                this.state = state;
                const id = this.id;
                const scheduler = this.scheduler;
                if (id != null) {
                    this.id = this.recycleAsyncId(scheduler, id, delay);
                }
                this.pending = true;
                this.delay = delay;
                this.id =
                    (_a = this.id) !== null && _a !== void 0
                        ? _a
                        : this.requestAsyncId(scheduler, this.id, delay);
                return this;
            }
            requestAsyncId(scheduler, _id, delay = 0) {
                return intervalProvider.setInterval(
                    scheduler.flush.bind(scheduler, this),
                    delay
                );
            }
            recycleAsyncId(_scheduler, id, delay = 0) {
                if (delay != null && this.delay === delay && this.pending === false) {
                    return id;
                }
                if (id != null) {
                    intervalProvider.clearInterval(id);
                }
                return undefined;
            }
            execute(state, delay) {
                if (this.closed) {
                    return new Error("executing a cancelled action");
                }
                this.pending = false;
                const error = this._execute(state, delay);
                if (error) {
                    return error;
                } else if (this.pending === false && this.id != null) {
                    this.id = this.recycleAsyncId(this.scheduler, this.id, null);
                }
            }
            _execute(state, _delay) {
                let errored = false;
                let errorValue;
                try {
                    this.work(state);
                } catch (e) {
                    errored = true;
                    errorValue = e ? e : new Error("Scheduled action threw falsy error");
                }
                if (errored) {
                    this.unsubscribe();
                    return errorValue;
                }
            }
            unsubscribe() {
                if (!this.closed) {
                    const { id, scheduler } = this;
                    const { actions } = scheduler;
                    this.work = this.state = this.scheduler = null;
                    this.pending = false;
                    arrRemove(actions, this);
                    if (id != null) {
                        this.id = this.recycleAsyncId(scheduler, id, null);
                    }
                    this.delay = null;
                    super.unsubscribe();
                }
            }
        } // ./src/esm/internal/util/Immediate.js
        //# sourceMappingURL=AsyncAction.js.map
        let nextHandle = 1;
        let resolved;
        const activeHandles = {};
        function findAndClearHandle(handle) {
            if (handle in activeHandles) {
                delete activeHandles[handle];
                return true;
            }
            return false;
        }
        const Immediate = {
            setImmediate(cb) {
                const handle = nextHandle++;
                activeHandles[handle] = true;
                if (!resolved) {
                    resolved = Promise.resolve();
                }
                resolved.then(() => findAndClearHandle(handle) && cb());
                return handle;
            },
            clearImmediate(handle) {
                findAndClearHandle(handle);
            }
        };
        const TestTools = {
            pending() {
                return Object.keys(activeHandles).length;
            }
        }; // ./src/esm/internal/scheduler/immediateProvider.js
        //# sourceMappingURL=Immediate.js.map
        const { setImmediate, clearImmediate } = Immediate;
        const immediateProvider = {
            setImmediate(...args) {
                const { delegate } = immediateProvider;
                return (
                    (delegate === null || delegate === void 0
                        ? void 0
                        : delegate.setImmediate) || setImmediate
                )(...args);
            },
            clearImmediate(handle) {
                const { delegate } = immediateProvider;
                return (
                    (delegate === null || delegate === void 0
                        ? void 0
                        : delegate.clearImmediate) || clearImmediate
                )(handle);
            },
            delegate: undefined
        }; // ./src/esm/internal/scheduler/AsapAction.js
        //# sourceMappingURL=immediateProvider.js.map
        class AsapAction extends AsyncAction {
            constructor(scheduler, work) {
                super(scheduler, work);
                this.scheduler = scheduler;
                this.work = work;
            }
            requestAsyncId(scheduler, id, delay = 0) {
                if (delay !== null && delay > 0) {
                    return super.requestAsyncId(scheduler, id, delay);
                }
                scheduler.actions.push(this);
                return (
                    scheduler._scheduled ||
                    (scheduler._scheduled = immediateProvider.setImmediate(
                        scheduler.flush.bind(scheduler, undefined)
                    ))
                );
            }
            recycleAsyncId(scheduler, id, delay = 0) {
                var _a;
                if (delay != null ? delay > 0 : this.delay > 0) {
                    return super.recycleAsyncId(scheduler, id, delay);
                }
                const { actions } = scheduler;
                if (
                    id != null &&
                    ((_a = actions[actions.length - 1]) === null || _a === void 0
                        ? void 0
                        : _a.id) !== id
                ) {
                    immediateProvider.clearImmediate(id);
                    if (scheduler._scheduled === id) {
                        scheduler._scheduled = undefined;
                    }
                }
                return undefined;
            }
        } // ./src/esm/internal/Scheduler.js
        //# sourceMappingURL=AsapAction.js.map
        class Scheduler {
            constructor(schedulerActionCtor, now = Scheduler.now) {
                this.schedulerActionCtor = schedulerActionCtor;
                this.now = now;
            }
            schedule(work, delay = 0, state) {
                return new this.schedulerActionCtor(this, work).schedule(state, delay);
            }
        }
        Scheduler.now = dateTimestampProvider.now; // ./src/esm/internal/scheduler/AsyncScheduler.js
        //# sourceMappingURL=Scheduler.js.map
        class AsyncScheduler extends Scheduler {
            constructor(SchedulerAction, now = Scheduler.now) {
                super(SchedulerAction, now);
                this.actions = [];
                this._active = false;
            }
            flush(action) {
                const { actions } = this;
                if (this._active) {
                    actions.push(action);
                    return;
                }
                let error;
                this._active = true;
                do {
                    if ((error = action.execute(action.state, action.delay))) {
                        break;
                    }
                } while ((action = actions.shift()));
                this._active = false;
                if (error) {
                    while ((action = actions.shift())) {
                        action.unsubscribe();
                    }
                    throw error;
                }
            }
        } // ./src/esm/internal/scheduler/AsapScheduler.js
        //# sourceMappingURL=AsyncScheduler.js.map
        class AsapScheduler extends AsyncScheduler {
            flush(action) {
                this._active = true;
                const flushId = this._scheduled;
                this._scheduled = undefined;
                const { actions } = this;
                let error;
                action = action || actions.shift();
                do {
                    if ((error = action.execute(action.state, action.delay))) {
                        break;
                    }
                } while (
                    (action = actions[0]) &&
                    action.id === flushId &&
                    actions.shift()
                );
                this._active = false;
                if (error) {
                    while (
                        (action = actions[0]) &&
                        action.id === flushId &&
                        actions.shift()
                    ) {
                        action.unsubscribe();
                    }
                    throw error;
                }
            }
        } // ./src/esm/internal/scheduler/asap.js
        //# sourceMappingURL=AsapScheduler.js.map
        const asapScheduler = new AsapScheduler(AsapAction);
        const asap = asapScheduler; // ./src/esm/internal/scheduler/async.js
        //# sourceMappingURL=asap.js.map
        const asyncScheduler = new AsyncScheduler(AsyncAction);
        const async_async = asyncScheduler; // ./src/esm/internal/scheduler/QueueAction.js
        //# sourceMappingURL=async.js.map
        class QueueAction extends AsyncAction {
            constructor(scheduler, work) {
                super(scheduler, work);
                this.scheduler = scheduler;
                this.work = work;
            }
            schedule(state, delay = 0) {
                if (delay > 0) {
                    return super.schedule(state, delay);
                }
                this.delay = delay;
                this.state = state;
                this.scheduler.flush(this);
                return this;
            }
            execute(state, delay) {
                return delay > 0 || this.closed
                    ? super.execute(state, delay)
                    : this._execute(state, delay);
            }
            requestAsyncId(scheduler, id, delay = 0) {
                if ((delay != null && delay > 0) || (delay == null && this.delay > 0)) {
                    return super.requestAsyncId(scheduler, id, delay);
                }
                scheduler.flush(this);
                return 0;
            }
        } // ./src/esm/internal/scheduler/QueueScheduler.js
        //# sourceMappingURL=QueueAction.js.map
        class QueueScheduler extends AsyncScheduler {} // ./src/esm/internal/scheduler/queue.js
        //# sourceMappingURL=QueueScheduler.js.map
        const queueScheduler = new QueueScheduler(QueueAction);
        const queue = queueScheduler; // ./src/esm/internal/scheduler/AnimationFrameAction.js
        //# sourceMappingURL=queue.js.map
        class AnimationFrameAction extends AsyncAction {
            constructor(scheduler, work) {
                super(scheduler, work);
                this.scheduler = scheduler;
                this.work = work;
            }
            requestAsyncId(scheduler, id, delay = 0) {
                if (delay !== null && delay > 0) {
                    return super.requestAsyncId(scheduler, id, delay);
                }
                scheduler.actions.push(this);
                return (
                    scheduler._scheduled ||
                    (scheduler._scheduled = animationFrameProvider.requestAnimationFrame(
                        () => scheduler.flush(undefined)
                    ))
                );
            }
            recycleAsyncId(scheduler, id, delay = 0) {
                var _a;
                if (delay != null ? delay > 0 : this.delay > 0) {
                    return super.recycleAsyncId(scheduler, id, delay);
                }
                const { actions } = scheduler;
                if (
                    id != null &&
                    id === scheduler._scheduled &&
                    ((_a = actions[actions.length - 1]) === null || _a === void 0
                        ? void 0
                        : _a.id) !== id
                ) {
                    animationFrameProvider.cancelAnimationFrame(id);
                    scheduler._scheduled = undefined;
                }
                return undefined;
            }
        } // ./src/esm/internal/scheduler/AnimationFrameScheduler.js
        //# sourceMappingURL=AnimationFrameAction.js.map
        class AnimationFrameScheduler extends AsyncScheduler {
            flush(action) {
                this._active = true;
                let flushId;
                if (action) {
                    flushId = action.id;
                } else {
                    flushId = this._scheduled;
                    this._scheduled = undefined;
                }
                const { actions } = this;
                let error;
                action = action || actions.shift();
                do {
                    if ((error = action.execute(action.state, action.delay))) {
                        break;
                    }
                } while (
                    (action = actions[0]) &&
                    action.id === flushId &&
                    actions.shift()
                );
                this._active = false;
                if (error) {
                    while (
                        (action = actions[0]) &&
                        action.id === flushId &&
                        actions.shift()
                    ) {
                        action.unsubscribe();
                    }
                    throw error;
                }
            }
        } // ./src/esm/internal/scheduler/animationFrame.js
        //# sourceMappingURL=AnimationFrameScheduler.js.map
        const animationFrameScheduler = new AnimationFrameScheduler(AnimationFrameAction);
        const animationFrame = animationFrameScheduler; // ./src/esm/internal/scheduler/VirtualTimeScheduler.js
        //# sourceMappingURL=animationFrame.js.map
        class VirtualTimeScheduler extends AsyncScheduler {
            constructor(schedulerActionCtor = VirtualAction, maxFrames = Infinity) {
                super(schedulerActionCtor, () => this.frame);
                this.maxFrames = maxFrames;
                this.frame = 0;
                this.index = -1;
            }
            flush() {
                const { actions, maxFrames } = this;
                let error;
                let action;
                while ((action = actions[0]) && action.delay <= maxFrames) {
                    actions.shift();
                    this.frame = action.delay;
                    if ((error = action.execute(action.state, action.delay))) {
                        break;
                    }
                }
                if (error) {
                    while ((action = actions.shift())) {
                        action.unsubscribe();
                    }
                    throw error;
                }
            }
        }
        VirtualTimeScheduler.frameTimeFactor = 10;
        class VirtualAction extends AsyncAction {
            constructor(scheduler, work, index = (scheduler.index += 1)) {
                super(scheduler, work);
                this.scheduler = scheduler;
                this.work = work;
                this.index = index;
                this.active = true;
                this.index = scheduler.index = index;
            }
            schedule(state, delay = 0) {
                if (Number.isFinite(delay)) {
                    if (!this.id) {
                        return super.schedule(state, delay);
                    }
                    this.active = false;
                    const action = new VirtualAction(this.scheduler, this.work);
                    this.add(action);
                    return action.schedule(state, delay);
                } else {
                    return Subscription.EMPTY;
                }
            }
            requestAsyncId(scheduler, id, delay = 0) {
                this.delay = scheduler.frame + delay;
                const { actions } = scheduler;
                actions.push(this);
                actions.sort(VirtualAction.sortActions);
                return 1;
            }
            recycleAsyncId(scheduler, id, delay = 0) {
                return undefined;
            }
            _execute(state, delay) {
                if (this.active === true) {
                    return super._execute(state, delay);
                }
            }
            static sortActions(a, b) {
                if (a.delay === b.delay) {
                    if (a.index === b.index) {
                        return 0;
                    } else if (a.index > b.index) {
                        return 1;
                    } else {
                        return -1;
                    }
                } else if (a.delay > b.delay) {
                    return 1;
                } else {
                    return -1;
                }
            }
        } // ./src/esm/internal/observable/empty.js
        //# sourceMappingURL=VirtualTimeScheduler.js.map
        const EMPTY = new Observable((subscriber) => subscriber.complete());
        function empty(scheduler) {
            return scheduler ? emptyScheduled(scheduler) : EMPTY;
        }
        function emptyScheduled(scheduler) {
            return new Observable((subscriber) =>
                scheduler.schedule(() => subscriber.complete())
            );
        } // ./src/esm/internal/util/isScheduler.js
        //# sourceMappingURL=empty.js.map
        function isScheduler(value) {
            return value && isFunction(value.schedule);
        } // ./src/esm/internal/util/args.js
        //# sourceMappingURL=isScheduler.js.map
        function last(arr) {
            return arr[arr.length - 1];
        }
        function popResultSelector(args) {
            return isFunction(last(args)) ? args.pop() : undefined;
        }
        function popScheduler(args) {
            return isScheduler(last(args)) ? args.pop() : undefined;
        }
        function popNumber(args, defaultValue) {
            return typeof last(args) === "number" ? args.pop() : defaultValue;
        }
        //# sourceMappingURL=args.js.map
        // EXTERNAL MODULE: external "tslib"
        var external_tslib_ = __webpack_require__(652); // ./src/esm/internal/util/isArrayLike.js
        const isArrayLike = (x) =>
            x && typeof x.length === "number" && typeof x !== "function"; // ./src/esm/internal/util/isPromise.js
        //# sourceMappingURL=isArrayLike.js.map
        function isPromise(value) {
            return isFunction(value === null || value === void 0 ? void 0 : value.then);
        } // ./src/esm/internal/util/isInteropObservable.js
        //# sourceMappingURL=isPromise.js.map
        function isInteropObservable(input) {
            return isFunction(input[observable]);
        } // ./src/esm/internal/util/isAsyncIterable.js
        //# sourceMappingURL=isInteropObservable.js.map
        function isAsyncIterable(obj) {
            return (
                Symbol.asyncIterator &&
                isFunction(
                    obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]
                )
            );
        } // ./src/esm/internal/util/throwUnobservableError.js
        //# sourceMappingURL=isAsyncIterable.js.map
        function createInvalidObservableTypeError(input) {
            return new TypeError(
                `You provided ${input !== null && typeof input === "object" ? "an invalid object" : `'${input}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`
            );
        } // ./src/esm/internal/symbol/iterator.js
        //# sourceMappingURL=throwUnobservableError.js.map
        function getSymbolIterator() {
            if (typeof Symbol !== "function" || !Symbol.iterator) {
                return "@@iterator";
            }
            return Symbol.iterator;
        }
        const iterator_iterator = getSymbolIterator(); // ./src/esm/internal/util/isIterable.js
        //# sourceMappingURL=iterator.js.map
        function isIterable(input) {
            return isFunction(
                input === null || input === void 0 ? void 0 : input[iterator_iterator]
            );
        } // ./src/esm/internal/util/isReadableStreamLike.js
        //# sourceMappingURL=isIterable.js.map
        function readableStreamLikeToAsyncGenerator(readableStream) {
            return (0, external_tslib_.__asyncGenerator)(
                this,
                arguments,
                function* readableStreamLikeToAsyncGenerator_1() {
                    const reader = readableStream.getReader();
                    try {
                        while (true) {
                            const { value, done } = yield (0, external_tslib_.__await)(
                                reader.read()
                            );
                            if (done) {
                                return yield (0, external_tslib_.__await)(void 0);
                            }
                            yield yield (0, external_tslib_.__await)(value);
                        }
                    } finally {
                        reader.releaseLock();
                    }
                }
            );
        }
        function isReadableStreamLike(obj) {
            return isFunction(obj === null || obj === void 0 ? void 0 : obj.getReader);
        } // ./src/esm/internal/observable/innerFrom.js
        //# sourceMappingURL=isReadableStreamLike.js.map
        function innerFrom(input) {
            if (input instanceof Observable) {
                return input;
            }
            if (input != null) {
                if (isInteropObservable(input)) {
                    return fromInteropObservable(input);
                }
                if (isArrayLike(input)) {
                    return fromArrayLike(input);
                }
                if (isPromise(input)) {
                    return fromPromise(input);
                }
                if (isAsyncIterable(input)) {
                    return fromAsyncIterable(input);
                }
                if (isIterable(input)) {
                    return fromIterable(input);
                }
                if (isReadableStreamLike(input)) {
                    return fromReadableStreamLike(input);
                }
            }
            throw createInvalidObservableTypeError(input);
        }
        function fromInteropObservable(obj) {
            return new Observable((subscriber) => {
                const obs = obj[observable]();
                if (isFunction(obs.subscribe)) {
                    return obs.subscribe(subscriber);
                }
                throw new TypeError(
                    "Provided object does not correctly implement Symbol.observable"
                );
            });
        }
        function fromArrayLike(array) {
            return new Observable((subscriber) => {
                for (let i = 0; i < array.length && !subscriber.closed; i++) {
                    subscriber.next(array[i]);
                }
                subscriber.complete();
            });
        }
        function fromPromise(promise) {
            return new Observable((subscriber) => {
                promise
                    .then(
                        (value) => {
                            if (!subscriber.closed) {
                                subscriber.next(value);
                                subscriber.complete();
                            }
                        },
                        (err) => subscriber.error(err)
                    )
                    .then(null, reportUnhandledError);
            });
        }
        function fromIterable(iterable) {
            return new Observable((subscriber) => {
                for (const value of iterable) {
                    subscriber.next(value);
                    if (subscriber.closed) {
                        return;
                    }
                }
                subscriber.complete();
            });
        }
        function fromAsyncIterable(asyncIterable) {
            return new Observable((subscriber) => {
                process(asyncIterable, subscriber).catch((err) => subscriber.error(err));
            });
        }
        function fromReadableStreamLike(readableStream) {
            return fromAsyncIterable(readableStreamLikeToAsyncGenerator(readableStream));
        }
        function process(asyncIterable, subscriber) {
            var asyncIterable_1, asyncIterable_1_1;
            var e_1, _a;
            return (0, external_tslib_.__awaiter)(this, void 0, void 0, function* () {
                try {
                    for (
                        asyncIterable_1 = (0, external_tslib_.__asyncValues)(
                            asyncIterable
                        );
                        (asyncIterable_1_1 = yield asyncIterable_1.next()),
                            !asyncIterable_1_1.done;

                    ) {
                        const value = asyncIterable_1_1.value;
                        subscriber.next(value);
                        if (subscriber.closed) {
                            return;
                        }
                    }
                } catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                } finally {
                    try {
                        if (
                            asyncIterable_1_1 &&
                            !asyncIterable_1_1.done &&
                            (_a = asyncIterable_1.return)
                        )
                            yield _a.call(asyncIterable_1);
                    } finally {
                        if (e_1) throw e_1.error;
                    }
                }
                subscriber.complete();
            });
        } // ./src/esm/internal/util/executeSchedule.js
        //# sourceMappingURL=innerFrom.js.map
        function executeSchedule(
            parentSubscription,
            scheduler,
            work,
            delay = 0,
            repeat = false
        ) {
            const scheduleSubscription = scheduler.schedule(function () {
                work();
                if (repeat) {
                    parentSubscription.add(this.schedule(null, delay));
                } else {
                    this.unsubscribe();
                }
            }, delay);
            parentSubscription.add(scheduleSubscription);
            if (!repeat) {
                return scheduleSubscription;
            }
        } // ./src/esm/internal/operators/observeOn.js
        //# sourceMappingURL=executeSchedule.js.map
        function observeOn(scheduler, delay = 0) {
            return operate((source, subscriber) => {
                source.subscribe(
                    createOperatorSubscriber(
                        subscriber,
                        (value) =>
                            executeSchedule(
                                subscriber,
                                scheduler,
                                () => subscriber.next(value),
                                delay
                            ),
                        () =>
                            executeSchedule(
                                subscriber,
                                scheduler,
                                () => subscriber.complete(),
                                delay
                            ),
                        (err) =>
                            executeSchedule(
                                subscriber,
                                scheduler,
                                () => subscriber.error(err),
                                delay
                            )
                    )
                );
            });
        } // ./src/esm/internal/operators/subscribeOn.js
        //# sourceMappingURL=observeOn.js.map
        function subscribeOn(scheduler, delay = 0) {
            return operate((source, subscriber) => {
                subscriber.add(
                    scheduler.schedule(() => source.subscribe(subscriber), delay)
                );
            });
        } // ./src/esm/internal/scheduled/scheduleObservable.js
        //# sourceMappingURL=subscribeOn.js.map
        function scheduleObservable(input, scheduler) {
            return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
        } // ./src/esm/internal/scheduled/schedulePromise.js
        //# sourceMappingURL=scheduleObservable.js.map
        function schedulePromise(input, scheduler) {
            return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
        } // ./src/esm/internal/scheduled/scheduleArray.js
        //# sourceMappingURL=schedulePromise.js.map
        function scheduleArray(input, scheduler) {
            return new Observable((subscriber) => {
                let i = 0;
                return scheduler.schedule(function () {
                    if (i === input.length) {
                        subscriber.complete();
                    } else {
                        subscriber.next(input[i++]);
                        if (!subscriber.closed) {
                            this.schedule();
                        }
                    }
                });
            });
        } // ./src/esm/internal/scheduled/scheduleIterable.js
        //# sourceMappingURL=scheduleArray.js.map
        function scheduleIterable(input, scheduler) {
            return new Observable((subscriber) => {
                let iterator;
                executeSchedule(subscriber, scheduler, () => {
                    iterator = input[iterator_iterator]();
                    executeSchedule(
                        subscriber,
                        scheduler,
                        () => {
                            let value;
                            let done;
                            try {
                                ({ value, done } = iterator.next());
                            } catch (err) {
                                subscriber.error(err);
                                return;
                            }
                            if (done) {
                                subscriber.complete();
                            } else {
                                subscriber.next(value);
                            }
                        },
                        0,
                        true
                    );
                });
                return () =>
                    isFunction(
                        iterator === null || iterator === void 0
                            ? void 0
                            : iterator.return
                    ) && iterator.return();
            });
        } // ./src/esm/internal/scheduled/scheduleAsyncIterable.js
        //# sourceMappingURL=scheduleIterable.js.map
        function scheduleAsyncIterable(input, scheduler) {
            if (!input) {
                throw new Error("Iterable cannot be null");
            }
            return new Observable((subscriber) => {
                executeSchedule(subscriber, scheduler, () => {
                    const iterator = input[Symbol.asyncIterator]();
                    executeSchedule(
                        subscriber,
                        scheduler,
                        () => {
                            iterator.next().then((result) => {
                                if (result.done) {
                                    subscriber.complete();
                                } else {
                                    subscriber.next(result.value);
                                }
                            });
                        },
                        0,
                        true
                    );
                });
            });
        } // ./src/esm/internal/scheduled/scheduleReadableStreamLike.js
        //# sourceMappingURL=scheduleAsyncIterable.js.map
        function scheduleReadableStreamLike(input, scheduler) {
            return scheduleAsyncIterable(
                readableStreamLikeToAsyncGenerator(input),
                scheduler
            );
        } // ./src/esm/internal/scheduled/scheduled.js
        //# sourceMappingURL=scheduleReadableStreamLike.js.map
        function scheduled(input, scheduler) {
            if (input != null) {
                if (isInteropObservable(input)) {
                    return scheduleObservable(input, scheduler);
                }
                if (isArrayLike(input)) {
                    return scheduleArray(input, scheduler);
                }
                if (isPromise(input)) {
                    return schedulePromise(input, scheduler);
                }
                if (isAsyncIterable(input)) {
                    return scheduleAsyncIterable(input, scheduler);
                }
                if (isIterable(input)) {
                    return scheduleIterable(input, scheduler);
                }
                if (isReadableStreamLike(input)) {
                    return scheduleReadableStreamLike(input, scheduler);
                }
            }
            throw createInvalidObservableTypeError(input);
        } // ./src/esm/internal/observable/from.js
        //# sourceMappingURL=scheduled.js.map
        function from(input, scheduler) {
            return scheduler ? scheduled(input, scheduler) : innerFrom(input);
        } // ./src/esm/internal/observable/of.js
        //# sourceMappingURL=from.js.map
        function of(...args) {
            const scheduler = popScheduler(args);
            return from(args, scheduler);
        } // ./src/esm/internal/observable/throwError.js
        //# sourceMappingURL=of.js.map
        function throwError(errorOrErrorFactory, scheduler) {
            const errorFactory = isFunction(errorOrErrorFactory)
                ? errorOrErrorFactory
                : () => errorOrErrorFactory;
            const init = (subscriber) => subscriber.error(errorFactory());
            return new Observable(
                scheduler ? (subscriber) => scheduler.schedule(init, 0, subscriber) : init
            );
        } // ./src/esm/internal/Notification.js
        //# sourceMappingURL=throwError.js.map
        var NotificationKind;
        (function (NotificationKind) {
            NotificationKind["NEXT"] = "N";
            NotificationKind["ERROR"] = "E";
            NotificationKind["COMPLETE"] = "C";
        })(NotificationKind || (NotificationKind = {}));
        class Notification {
            constructor(kind, value, error) {
                this.kind = kind;
                this.value = value;
                this.error = error;
                this.hasValue = kind === "N";
            }
            observe(observer) {
                return observeNotification(this, observer);
            }
            do(nextHandler, errorHandler, completeHandler) {
                const { kind, value, error } = this;
                return kind === "N"
                    ? nextHandler === null || nextHandler === void 0
                        ? void 0
                        : nextHandler(value)
                    : kind === "E"
                      ? errorHandler === null || errorHandler === void 0
                          ? void 0
                          : errorHandler(error)
                      : completeHandler === null || completeHandler === void 0
                        ? void 0
                        : completeHandler();
            }
            accept(nextOrObserver, error, complete) {
                var _a;
                return isFunction(
                    (_a = nextOrObserver) === null || _a === void 0 ? void 0 : _a.next
                )
                    ? this.observe(nextOrObserver)
                    : this.do(nextOrObserver, error, complete);
            }
            toObservable() {
                const { kind, value, error } = this;
                const result =
                    kind === "N"
                        ? of(value)
                        : kind === "E"
                          ? throwError(() => error)
                          : kind === "C"
                            ? EMPTY
                            : 0;
                if (!result) {
                    throw new TypeError(`Unexpected notification kind ${kind}`);
                }
                return result;
            }
            static createNext(value) {
                return new Notification("N", value);
            }
            static createError(err) {
                return new Notification("E", undefined, err);
            }
            static createComplete() {
                return Notification.completeNotification;
            }
        }
        Notification.completeNotification = new Notification("C");
        function observeNotification(notification, observer) {
            var _a, _b, _c;
            const { kind, value, error } = notification;
            if (typeof kind !== "string") {
                throw new TypeError('Invalid notification, missing "kind"');
            }
            kind === "N"
                ? (_a = observer.next) === null || _a === void 0
                    ? void 0
                    : _a.call(observer, value)
                : kind === "E"
                  ? (_b = observer.error) === null || _b === void 0
                      ? void 0
                      : _b.call(observer, error)
                  : (_c = observer.complete) === null || _c === void 0
                    ? void 0
                    : _c.call(observer);
        } // ./src/esm/internal/util/isObservable.js
        //# sourceMappingURL=Notification.js.map
        function isObservable(obj) {
            return (
                !!obj &&
                (obj instanceof Observable ||
                    (isFunction(obj.lift) && isFunction(obj.subscribe)))
            );
        } // ./src/esm/internal/util/EmptyError.js
        //# sourceMappingURL=isObservable.js.map
        const EmptyError = createErrorClass(
            (_super) =>
                function EmptyErrorImpl() {
                    _super(this);
                    this.name = "EmptyError";
                    this.message = "no elements in sequence";
                }
        ); // ./src/esm/internal/lastValueFrom.js
        //# sourceMappingURL=EmptyError.js.map
        function lastValueFrom(source, config) {
            const hasConfig = typeof config === "object";
            return new Promise((resolve, reject) => {
                let _hasValue = false;
                let _value;
                source.subscribe({
                    next: (value) => {
                        _value = value;
                        _hasValue = true;
                    },
                    error: reject,
                    complete: () => {
                        if (_hasValue) {
                            resolve(_value);
                        } else if (hasConfig) {
                            resolve(config.defaultValue);
                        } else {
                            reject(new EmptyError());
                        }
                    }
                });
            });
        } // ./src/esm/internal/firstValueFrom.js
        //# sourceMappingURL=lastValueFrom.js.map
        function firstValueFrom(source, config) {
            const hasConfig = typeof config === "object";
            return new Promise((resolve, reject) => {
                const subscriber = new SafeSubscriber({
                    next: (value) => {
                        resolve(value);
                        subscriber.unsubscribe();
                    },
                    error: reject,
                    complete: () => {
                        if (hasConfig) {
                            resolve(config.defaultValue);
                        } else {
                            reject(new EmptyError());
                        }
                    }
                });
                source.subscribe(subscriber);
            });
        } // ./src/esm/internal/util/ArgumentOutOfRangeError.js
        //# sourceMappingURL=firstValueFrom.js.map
        const ArgumentOutOfRangeError = createErrorClass(
            (_super) =>
                function ArgumentOutOfRangeErrorImpl() {
                    _super(this);
                    this.name = "ArgumentOutOfRangeError";
                    this.message = "argument out of range";
                }
        ); // ./src/esm/internal/util/NotFoundError.js
        //# sourceMappingURL=ArgumentOutOfRangeError.js.map
        const NotFoundError = createErrorClass(
            (_super) =>
                function NotFoundErrorImpl(message) {
                    _super(this);
                    this.name = "NotFoundError";
                    this.message = message;
                }
        ); // ./src/esm/internal/util/SequenceError.js
        //# sourceMappingURL=NotFoundError.js.map
        const SequenceError = createErrorClass(
            (_super) =>
                function SequenceErrorImpl(message) {
                    _super(this);
                    this.name = "SequenceError";
                    this.message = message;
                }
        ); // ./src/esm/internal/util/isDate.js
        //# sourceMappingURL=SequenceError.js.map
        function isValidDate(value) {
            return value instanceof Date && !isNaN(value);
        } // ./src/esm/internal/operators/timeout.js
        //# sourceMappingURL=isDate.js.map
        const TimeoutError = createErrorClass(
            (_super) =>
                function TimeoutErrorImpl(info = null) {
                    _super(this);
                    this.message = "Timeout has occurred";
                    this.name = "TimeoutError";
                    this.info = info;
                }
        );
        function timeout(config, schedulerArg) {
            const {
                first,
                each,
                with: _with = timeoutErrorFactory,
                scheduler = schedulerArg !== null && schedulerArg !== void 0
                    ? schedulerArg
                    : asyncScheduler,
                meta = null
            } = isValidDate(config)
                ? { first: config }
                : typeof config === "number"
                  ? { each: config }
                  : config;
            if (first == null && each == null) {
                throw new TypeError("No timeout provided.");
            }
            return operate((source, subscriber) => {
                let originalSourceSubscription;
                let timerSubscription;
                let lastValue = null;
                let seen = 0;
                const startTimer = (delay) => {
                    timerSubscription = executeSchedule(
                        subscriber,
                        scheduler,
                        () => {
                            try {
                                originalSourceSubscription.unsubscribe();
                                innerFrom(
                                    _with({
                                        meta,
                                        lastValue,
                                        seen
                                    })
                                ).subscribe(subscriber);
                            } catch (err) {
                                subscriber.error(err);
                            }
                        },
                        delay
                    );
                };
                originalSourceSubscription = source.subscribe(
                    createOperatorSubscriber(
                        subscriber,
                        (value) => {
                            timerSubscription === null || timerSubscription === void 0
                                ? void 0
                                : timerSubscription.unsubscribe();
                            seen++;
                            subscriber.next((lastValue = value));
                            each > 0 && startTimer(each);
                        },
                        undefined,
                        undefined,
                        () => {
                            if (
                                !(timerSubscription === null ||
                                timerSubscription === void 0
                                    ? void 0
                                    : timerSubscription.closed)
                            ) {
                                timerSubscription === null || timerSubscription === void 0
                                    ? void 0
                                    : timerSubscription.unsubscribe();
                            }
                            lastValue = null;
                        }
                    )
                );
                !seen &&
                    startTimer(
                        first != null
                            ? typeof first === "number"
                                ? first
                                : +first - scheduler.now()
                            : each
                    );
            });
        }
        function timeoutErrorFactory(info) {
            throw new TimeoutError(info);
        } // ./src/esm/internal/operators/map.js
        //# sourceMappingURL=timeout.js.map
        function map(project, thisArg) {
            return operate((source, subscriber) => {
                let index = 0;
                source.subscribe(
                    createOperatorSubscriber(subscriber, (value) => {
                        subscriber.next(project.call(thisArg, value, index++));
                    })
                );
            });
        } // ./src/esm/internal/util/mapOneOrManyArgs.js
        //# sourceMappingURL=map.js.map
        const { isArray } = Array;
        function callOrApply(fn, args) {
            return isArray(args) ? fn(...args) : fn(args);
        }
        function mapOneOrManyArgs(fn) {
            return map((args) => callOrApply(fn, args));
        } // ./src/esm/internal/observable/bindCallbackInternals.js
        //# sourceMappingURL=mapOneOrManyArgs.js.map
        function bindCallbackInternals(
            isNodeStyle,
            callbackFunc,
            resultSelector,
            scheduler
        ) {
            if (resultSelector) {
                if (isScheduler(resultSelector)) {
                    scheduler = resultSelector;
                } else {
                    return function (...args) {
                        return bindCallbackInternals(isNodeStyle, callbackFunc, scheduler)
                            .apply(this, args)
                            .pipe(mapOneOrManyArgs(resultSelector));
                    };
                }
            }
            if (scheduler) {
                return function (...args) {
                    return bindCallbackInternals(isNodeStyle, callbackFunc)
                        .apply(this, args)
                        .pipe(subscribeOn(scheduler), observeOn(scheduler));
                };
            }
            return function (...args) {
                const subject = new AsyncSubject();
                let uninitialized = true;
                return new Observable((subscriber) => {
                    const subs = subject.subscribe(subscriber);
                    if (uninitialized) {
                        uninitialized = false;
                        let isAsync = false;
                        let isComplete = false;
                        callbackFunc.apply(this, [
                            ...args,
                            (...results) => {
                                if (isNodeStyle) {
                                    const err = results.shift();
                                    if (err != null) {
                                        subject.error(err);
                                        return;
                                    }
                                }
                                subject.next(1 < results.length ? results : results[0]);
                                isComplete = true;
                                if (isAsync) {
                                    subject.complete();
                                }
                            }
                        ]);
                        if (isComplete) {
                            subject.complete();
                        }
                        isAsync = true;
                    }
                    return subs;
                });
            };
        } // ./src/esm/internal/observable/bindCallback.js
        //# sourceMappingURL=bindCallbackInternals.js.map
        function bindCallback(callbackFunc, resultSelector, scheduler) {
            return bindCallbackInternals(false, callbackFunc, resultSelector, scheduler);
        } // ./src/esm/internal/observable/bindNodeCallback.js
        //# sourceMappingURL=bindCallback.js.map
        function bindNodeCallback(callbackFunc, resultSelector, scheduler) {
            return bindCallbackInternals(true, callbackFunc, resultSelector, scheduler);
        } // ./src/esm/internal/util/argsArgArrayOrObject.js
        //# sourceMappingURL=bindNodeCallback.js.map
        const { isArray: argsArgArrayOrObject_isArray } = Array;
        const { getPrototypeOf, prototype: objectProto, keys: getKeys } = Object;
        function argsArgArrayOrObject(args) {
            if (args.length === 1) {
                const first = args[0];
                if (argsArgArrayOrObject_isArray(first)) {
                    return { args: first, keys: null };
                }
                if (isPOJO(first)) {
                    const keys = getKeys(first);
                    return {
                        args: keys.map((key) => first[key]),
                        keys
                    };
                }
            }
            return { args: args, keys: null };
        }
        function isPOJO(obj) {
            return obj && typeof obj === "object" && getPrototypeOf(obj) === objectProto;
        } // ./src/esm/internal/util/createObject.js
        //# sourceMappingURL=argsArgArrayOrObject.js.map
        function createObject(keys, values) {
            return keys.reduce(
                (result, key, i) => ((result[key] = values[i]), result),
                {}
            );
        } // ./src/esm/internal/observable/combineLatest.js
        //# sourceMappingURL=createObject.js.map
        function combineLatest(...args) {
            const scheduler = popScheduler(args);
            const resultSelector = popResultSelector(args);
            const { args: observables, keys } = argsArgArrayOrObject(args);
            if (observables.length === 0) {
                return from([], scheduler);
            }
            const result = new Observable(
                combineLatestInit(
                    observables,
                    scheduler,
                    keys ? (values) => createObject(keys, values) : identity
                )
            );
            return resultSelector
                ? result.pipe(mapOneOrManyArgs(resultSelector))
                : result;
        }
        function combineLatestInit(observables, scheduler, valueTransform = identity) {
            return (subscriber) => {
                maybeSchedule(
                    scheduler,
                    () => {
                        const { length } = observables;
                        const values = new Array(length);
                        let active = length;
                        let remainingFirstValues = length;
                        for (let i = 0; i < length; i++) {
                            maybeSchedule(
                                scheduler,
                                () => {
                                    const source = from(observables[i], scheduler);
                                    let hasFirstValue = false;
                                    source.subscribe(
                                        createOperatorSubscriber(
                                            subscriber,
                                            (value) => {
                                                values[i] = value;
                                                if (!hasFirstValue) {
                                                    hasFirstValue = true;
                                                    remainingFirstValues--;
                                                }
                                                if (!remainingFirstValues) {
                                                    subscriber.next(
                                                        valueTransform(values.slice())
                                                    );
                                                }
                                            },
                                            () => {
                                                if (!--active) {
                                                    subscriber.complete();
                                                }
                                            }
                                        )
                                    );
                                },
                                subscriber
                            );
                        }
                    },
                    subscriber
                );
            };
        }
        function maybeSchedule(scheduler, execute, subscription) {
            if (scheduler) {
                executeSchedule(subscription, scheduler, execute);
            } else {
                execute();
            }
        } // ./src/esm/internal/operators/mergeInternals.js
        //# sourceMappingURL=combineLatest.js.map
        function mergeInternals(
            source,
            subscriber,
            project,
            concurrent,
            onBeforeNext,
            expand,
            innerSubScheduler,
            additionalFinalizer
        ) {
            const buffer = [];
            let active = 0;
            let index = 0;
            let isComplete = false;
            const checkComplete = () => {
                if (isComplete && !buffer.length && !active) {
                    subscriber.complete();
                }
            };
            const outerNext = (value) =>
                active < concurrent ? doInnerSub(value) : buffer.push(value);
            const doInnerSub = (value) => {
                expand && subscriber.next(value);
                active++;
                let innerComplete = false;
                innerFrom(project(value, index++)).subscribe(
                    createOperatorSubscriber(
                        subscriber,
                        (innerValue) => {
                            onBeforeNext === null || onBeforeNext === void 0
                                ? void 0
                                : onBeforeNext(innerValue);
                            if (expand) {
                                outerNext(innerValue);
                            } else {
                                subscriber.next(innerValue);
                            }
                        },
                        () => {
                            innerComplete = true;
                        },
                        undefined,
                        () => {
                            if (innerComplete) {
                                try {
                                    active--;
                                    while (buffer.length && active < concurrent) {
                                        const bufferedValue = buffer.shift();
                                        if (innerSubScheduler) {
                                            executeSchedule(
                                                subscriber,
                                                innerSubScheduler,
                                                () => doInnerSub(bufferedValue)
                                            );
                                        } else {
                                            doInnerSub(bufferedValue);
                                        }
                                    }
                                    checkComplete();
                                } catch (err) {
                                    subscriber.error(err);
                                }
                            }
                        }
                    )
                );
            };
            source.subscribe(
                createOperatorSubscriber(subscriber, outerNext, () => {
                    isComplete = true;
                    checkComplete();
                })
            );
            return () => {
                additionalFinalizer === null || additionalFinalizer === void 0
                    ? void 0
                    : additionalFinalizer();
            };
        } // ./src/esm/internal/operators/mergeMap.js
        //# sourceMappingURL=mergeInternals.js.map
        function mergeMap(project, resultSelector, concurrent = Infinity) {
            if (isFunction(resultSelector)) {
                return mergeMap(
                    (a, i) =>
                        map((b, ii) => resultSelector(a, b, i, ii))(
                            innerFrom(project(a, i))
                        ),
                    concurrent
                );
            } else if (typeof resultSelector === "number") {
                concurrent = resultSelector;
            }
            return operate((source, subscriber) =>
                mergeInternals(source, subscriber, project, concurrent)
            );
        } // ./src/esm/internal/operators/mergeAll.js
        //# sourceMappingURL=mergeMap.js.map
        function mergeAll(concurrent = Infinity) {
            return mergeMap(identity, concurrent);
        } // ./src/esm/internal/operators/concatAll.js
        //# sourceMappingURL=mergeAll.js.map
        function concatAll() {
            return mergeAll(1);
        } // ./src/esm/internal/observable/concat.js
        //# sourceMappingURL=concatAll.js.map
        function concat(...args) {
            return concatAll()(from(args, popScheduler(args)));
        } // ./src/esm/internal/observable/defer.js
        //# sourceMappingURL=concat.js.map
        function defer(observableFactory) {
            return new Observable((subscriber) => {
                innerFrom(observableFactory()).subscribe(subscriber);
            });
        } // ./src/esm/internal/observable/connectable.js
        //# sourceMappingURL=defer.js.map
        const DEFAULT_CONFIG = {
            connector: () => new Subject(),
            resetOnDisconnect: true
        };
        function connectable(source, config = DEFAULT_CONFIG) {
            let connection = null;
            const { connector, resetOnDisconnect = true } = config;
            let subject = connector();
            const result = new Observable((subscriber) => {
                return subject.subscribe(subscriber);
            });
            result.connect = () => {
                if (!connection || connection.closed) {
                    connection = defer(() => source).subscribe(subject);
                    if (resetOnDisconnect) {
                        connection.add(() => (subject = connector()));
                    }
                }
                return connection;
            };
            return result;
        } // ./src/esm/internal/observable/forkJoin.js
        //# sourceMappingURL=connectable.js.map
        function forkJoin(...args) {
            const resultSelector = popResultSelector(args);
            const { args: sources, keys } = argsArgArrayOrObject(args);
            const result = new Observable((subscriber) => {
                const { length } = sources;
                if (!length) {
                    subscriber.complete();
                    return;
                }
                const values = new Array(length);
                let remainingCompletions = length;
                let remainingEmissions = length;
                for (let sourceIndex = 0; sourceIndex < length; sourceIndex++) {
                    let hasValue = false;
                    innerFrom(sources[sourceIndex]).subscribe(
                        createOperatorSubscriber(
                            subscriber,
                            (value) => {
                                if (!hasValue) {
                                    hasValue = true;
                                    remainingEmissions--;
                                }
                                values[sourceIndex] = value;
                            },
                            () => remainingCompletions--,
                            undefined,
                            () => {
                                if (!remainingCompletions || !hasValue) {
                                    if (!remainingEmissions) {
                                        subscriber.next(
                                            keys ? createObject(keys, values) : values
                                        );
                                    }
                                    subscriber.complete();
                                }
                            }
                        )
                    );
                }
            });
            return resultSelector
                ? result.pipe(mapOneOrManyArgs(resultSelector))
                : result;
        } // ./src/esm/internal/observable/fromEvent.js
        //# sourceMappingURL=forkJoin.js.map
        const nodeEventEmitterMethods = ["addListener", "removeListener"];
        const eventTargetMethods = ["addEventListener", "removeEventListener"];
        const jqueryMethods = ["on", "off"];
        function fromEvent(target, eventName, options, resultSelector) {
            if (isFunction(options)) {
                resultSelector = options;
                options = undefined;
            }
            if (resultSelector) {
                return fromEvent(target, eventName, options).pipe(
                    mapOneOrManyArgs(resultSelector)
                );
            }
            const [add, remove] = isEventTarget(target)
                ? eventTargetMethods.map(
                      (methodName) => (handler) =>
                          target[methodName](eventName, handler, options)
                  )
                : isNodeStyleEventEmitter(target)
                  ? nodeEventEmitterMethods.map(
                        toCommonHandlerRegistry(target, eventName)
                    )
                  : isJQueryStyleEventEmitter(target)
                    ? jqueryMethods.map(toCommonHandlerRegistry(target, eventName))
                    : [];
            if (!add) {
                if (isArrayLike(target)) {
                    return mergeMap((subTarget) =>
                        fromEvent(subTarget, eventName, options)
                    )(innerFrom(target));
                }
            }
            if (!add) {
                throw new TypeError("Invalid event target");
            }
            return new Observable((subscriber) => {
                const handler = (...args) =>
                    subscriber.next(1 < args.length ? args : args[0]);
                add(handler);
                return () => remove(handler);
            });
        }
        function toCommonHandlerRegistry(target, eventName) {
            return (methodName) => (handler) => target[methodName](eventName, handler);
        }
        function isNodeStyleEventEmitter(target) {
            return isFunction(target.addListener) && isFunction(target.removeListener);
        }
        function isJQueryStyleEventEmitter(target) {
            return isFunction(target.on) && isFunction(target.off);
        }
        function isEventTarget(target) {
            return (
                isFunction(target.addEventListener) &&
                isFunction(target.removeEventListener)
            );
        } // ./src/esm/internal/observable/fromEventPattern.js
        //# sourceMappingURL=fromEvent.js.map
        function fromEventPattern(addHandler, removeHandler, resultSelector) {
            if (resultSelector) {
                return fromEventPattern(addHandler, removeHandler).pipe(
                    mapOneOrManyArgs(resultSelector)
                );
            }
            return new Observable((subscriber) => {
                const handler = (...e) => subscriber.next(e.length === 1 ? e[0] : e);
                const retValue = addHandler(handler);
                return isFunction(removeHandler)
                    ? () => removeHandler(handler, retValue)
                    : undefined;
            });
        } // ./src/esm/internal/observable/generate.js
        //# sourceMappingURL=fromEventPattern.js.map
        function generate(
            initialStateOrOptions,
            condition,
            iterate,
            resultSelectorOrScheduler,
            scheduler
        ) {
            let resultSelector;
            let initialState;
            if (arguments.length === 1) {
                ({
                    initialState,
                    condition,
                    iterate,
                    resultSelector = identity,
                    scheduler
                } = initialStateOrOptions);
            } else {
                initialState = initialStateOrOptions;
                if (
                    !resultSelectorOrScheduler ||
                    isScheduler(resultSelectorOrScheduler)
                ) {
                    resultSelector = identity;
                    scheduler = resultSelectorOrScheduler;
                } else {
                    resultSelector = resultSelectorOrScheduler;
                }
            }
            function* gen() {
                for (
                    let state = initialState;
                    !condition || condition(state);
                    state = iterate(state)
                ) {
                    yield resultSelector(state);
                }
            }
            return defer(scheduler ? () => scheduleIterable(gen(), scheduler) : gen);
        } // ./src/esm/internal/observable/iif.js
        //# sourceMappingURL=generate.js.map
        function iif(condition, trueResult, falseResult) {
            return defer(() => (condition() ? trueResult : falseResult));
        } // ./src/esm/internal/observable/timer.js
        //# sourceMappingURL=iif.js.map
        function timer(dueTime = 0, intervalOrScheduler, scheduler = async_async) {
            let intervalDuration = -1;
            if (intervalOrScheduler != null) {
                if (isScheduler(intervalOrScheduler)) {
                    scheduler = intervalOrScheduler;
                } else {
                    intervalDuration = intervalOrScheduler;
                }
            }
            return new Observable((subscriber) => {
                let due = isValidDate(dueTime) ? +dueTime - scheduler.now() : dueTime;
                if (due < 0) {
                    due = 0;
                }
                let n = 0;
                return scheduler.schedule(function () {
                    if (!subscriber.closed) {
                        subscriber.next(n++);
                        if (0 <= intervalDuration) {
                            this.schedule(undefined, intervalDuration);
                        } else {
                            subscriber.complete();
                        }
                    }
                }, due);
            });
        } // ./src/esm/internal/observable/interval.js
        //# sourceMappingURL=timer.js.map
        function interval(period = 0, scheduler = asyncScheduler) {
            if (period < 0) {
                period = 0;
            }
            return timer(period, period, scheduler);
        } // ./src/esm/internal/observable/merge.js
        //# sourceMappingURL=interval.js.map
        function merge(...args) {
            const scheduler = popScheduler(args);
            const concurrent = popNumber(args, Infinity);
            const sources = args;
            return !sources.length
                ? EMPTY
                : sources.length === 1
                  ? innerFrom(sources[0])
                  : mergeAll(concurrent)(from(sources, scheduler));
        } // ./src/esm/internal/observable/never.js
        //# sourceMappingURL=merge.js.map
        const NEVER = new Observable(noop);
        function never() {
            return NEVER;
        } // ./src/esm/internal/util/argsOrArgArray.js
        //# sourceMappingURL=never.js.map
        const { isArray: argsOrArgArray_isArray } = Array;
        function argsOrArgArray(args) {
            return args.length === 1 && argsOrArgArray_isArray(args[0]) ? args[0] : args;
        } // ./src/esm/internal/observable/onErrorResumeNext.js
        //# sourceMappingURL=argsOrArgArray.js.map
        function onErrorResumeNext(...sources) {
            const nextSources = argsOrArgArray(sources);
            return new Observable((subscriber) => {
                let sourceIndex = 0;
                const subscribeNext = () => {
                    if (sourceIndex < nextSources.length) {
                        let nextSource;
                        try {
                            nextSource = innerFrom(nextSources[sourceIndex++]);
                        } catch (err) {
                            subscribeNext();
                            return;
                        }
                        const innerSubscriber = new OperatorSubscriber(
                            subscriber,
                            undefined,
                            noop,
                            noop
                        );
                        nextSource.subscribe(innerSubscriber);
                        innerSubscriber.add(subscribeNext);
                    } else {
                        subscriber.complete();
                    }
                };
                subscribeNext();
            });
        } // ./src/esm/internal/observable/pairs.js
        //# sourceMappingURL=onErrorResumeNext.js.map
        function pairs(obj, scheduler) {
            return from(Object.entries(obj), scheduler);
        } // ./src/esm/internal/util/not.js
        //# sourceMappingURL=pairs.js.map
        function not(pred, thisArg) {
            return (value, index) => !pred.call(thisArg, value, index);
        } // ./src/esm/internal/operators/filter.js
        //# sourceMappingURL=not.js.map
        function filter(predicate, thisArg) {
            return operate((source, subscriber) => {
                let index = 0;
                source.subscribe(
                    createOperatorSubscriber(
                        subscriber,
                        (value) =>
                            predicate.call(thisArg, value, index++) &&
                            subscriber.next(value)
                    )
                );
            });
        } // ./src/esm/internal/observable/partition.js
        //# sourceMappingURL=filter.js.map
        function partition(source, predicate, thisArg) {
            return [
                filter(predicate, thisArg)(innerFrom(source)),
                filter(not(predicate, thisArg))(innerFrom(source))
            ];
        } // ./src/esm/internal/observable/race.js
        //# sourceMappingURL=partition.js.map
        function race(...sources) {
            sources = argsOrArgArray(sources);
            return sources.length === 1
                ? innerFrom(sources[0])
                : new Observable(raceInit(sources));
        }
        function raceInit(sources) {
            return (subscriber) => {
                let subscriptions = [];
                for (
                    let i = 0;
                    subscriptions && !subscriber.closed && i < sources.length;
                    i++
                ) {
                    subscriptions.push(
                        innerFrom(sources[i]).subscribe(
                            createOperatorSubscriber(subscriber, (value) => {
                                if (subscriptions) {
                                    for (let s = 0; s < subscriptions.length; s++) {
                                        s !== i && subscriptions[s].unsubscribe();
                                    }
                                    subscriptions = null;
                                }
                                subscriber.next(value);
                            })
                        )
                    );
                }
            };
        } // ./src/esm/internal/observable/range.js
        //# sourceMappingURL=race.js.map
        function range(start, count, scheduler) {
            if (count == null) {
                count = start;
                start = 0;
            }
            if (count <= 0) {
                return EMPTY;
            }
            const end = count + start;
            return new Observable(
                scheduler
                    ? (subscriber) => {
                          let n = start;
                          return scheduler.schedule(function () {
                              if (n < end) {
                                  subscriber.next(n++);
                                  this.schedule();
                              } else {
                                  subscriber.complete();
                              }
                          });
                      }
                    : (subscriber) => {
                          let n = start;
                          while (n < end && !subscriber.closed) {
                              subscriber.next(n++);
                          }
                          subscriber.complete();
                      }
            );
        } // ./src/esm/internal/observable/using.js
        //# sourceMappingURL=range.js.map
        function using(resourceFactory, observableFactory) {
            return new Observable((subscriber) => {
                const resource = resourceFactory();
                const result = observableFactory(resource);
                const source = result ? innerFrom(result) : EMPTY;
                source.subscribe(subscriber);
                return () => {
                    if (resource) {
                        resource.unsubscribe();
                    }
                };
            });
        } // ./src/esm/internal/observable/zip.js
        //# sourceMappingURL=using.js.map
        function zip(...args) {
            const resultSelector = popResultSelector(args);
            const sources = argsOrArgArray(args);
            return sources.length
                ? new Observable((subscriber) => {
                      let buffers = sources.map(() => []);
                      let completed = sources.map(() => false);
                      subscriber.add(() => {
                          buffers = completed = null;
                      });
                      for (
                          let sourceIndex = 0;
                          !subscriber.closed && sourceIndex < sources.length;
                          sourceIndex++
                      ) {
                          innerFrom(sources[sourceIndex]).subscribe(
                              createOperatorSubscriber(
                                  subscriber,
                                  (value) => {
                                      buffers[sourceIndex].push(value);
                                      if (buffers.every((buffer) => buffer.length)) {
                                          const result = buffers.map((buffer) =>
                                              buffer.shift()
                                          );
                                          subscriber.next(
                                              resultSelector
                                                  ? resultSelector(...result)
                                                  : result
                                          );
                                          if (
                                              buffers.some(
                                                  (buffer, i) =>
                                                      !buffer.length && completed[i]
                                              )
                                          ) {
                                              subscriber.complete();
                                          }
                                      }
                                  },
                                  () => {
                                      completed[sourceIndex] = true;
                                      !buffers[sourceIndex].length &&
                                          subscriber.complete();
                                  }
                              )
                          );
                      }
                      return () => {
                          buffers = completed = null;
                      };
                  })
                : EMPTY;
        } // ./src/esm/internal/operators/audit.js
        //# sourceMappingURL=zip.js.map
        function audit(durationSelector) {
            return operate((source, subscriber) => {
                let hasValue = false;
                let lastValue = null;
                let durationSubscriber = null;
                let isComplete = false;
                const endDuration = () => {
                    durationSubscriber === null || durationSubscriber === void 0
                        ? void 0
                        : durationSubscriber.unsubscribe();
                    durationSubscriber = null;
                    if (hasValue) {
                        hasValue = false;
                        const value = lastValue;
                        lastValue = null;
                        subscriber.next(value);
                    }
                    isComplete && subscriber.complete();
                };
                const cleanupDuration = () => {
                    durationSubscriber = null;
                    isComplete && subscriber.complete();
                };
                source.subscribe(
                    createOperatorSubscriber(
                        subscriber,
                        (value) => {
                            hasValue = true;
                            lastValue = value;
                            if (!durationSubscriber) {
                                innerFrom(durationSelector(value)).subscribe(
                                    (durationSubscriber = createOperatorSubscriber(
                                        subscriber,
                                        endDuration,
                                        cleanupDuration
                                    ))
                                );
                            }
                        },
                        () => {
                            isComplete = true;
                            (!hasValue ||
                                !durationSubscriber ||
                                durationSubscriber.closed) &&
                                subscriber.complete();
                        }
                    )
                );
            });
        } // ./src/esm/internal/operators/auditTime.js
        //# sourceMappingURL=audit.js.map
        function auditTime(duration, scheduler = asyncScheduler) {
            return audit(() => timer(duration, scheduler));
        } // ./src/esm/internal/operators/buffer.js
        //# sourceMappingURL=auditTime.js.map
        function buffer(closingNotifier) {
            return operate((source, subscriber) => {
                let currentBuffer = [];
                source.subscribe(
                    createOperatorSubscriber(
                        subscriber,
                        (value) => currentBuffer.push(value),
                        () => {
                            subscriber.next(currentBuffer);
                            subscriber.complete();
                        }
                    )
                );
                innerFrom(closingNotifier).subscribe(
                    createOperatorSubscriber(
                        subscriber,
                        () => {
                            const b = currentBuffer;
                            currentBuffer = [];
                            subscriber.next(b);
                        },
                        noop
                    )
                );
                return () => {
                    currentBuffer = null;
                };
            });
        } // ./src/esm/internal/operators/bufferCount.js
        //# sourceMappingURL=buffer.js.map
        function bufferCount(bufferSize, startBufferEvery = null) {
            startBufferEvery =
                startBufferEvery !== null && startBufferEvery !== void 0
                    ? startBufferEvery
                    : bufferSize;
            return operate((source, subscriber) => {
                let buffers = [];
                let count = 0;
                source.subscribe(
                    createOperatorSubscriber(
                        subscriber,
                        (value) => {
                            let toEmit = null;
                            if (count++ % startBufferEvery === 0) {
                                buffers.push([]);
                            }
                            for (const buffer of buffers) {
                                buffer.push(value);
                                if (bufferSize <= buffer.length) {
                                    toEmit =
                                        toEmit !== null && toEmit !== void 0
                                            ? toEmit
                                            : [];
                                    toEmit.push(buffer);
                                }
                            }
                            if (toEmit) {
                                for (const buffer of toEmit) {
                                    arrRemove(buffers, buffer);
                                    subscriber.next(buffer);
                                }
                            }
                        },
                        () => {
                            for (const buffer of buffers) {
                                subscriber.next(buffer);
                            }
                            subscriber.complete();
                        },
                        undefined,
                        () => {
                            buffers = null;
                        }
                    )
                );
            });
        } // ./src/esm/internal/operators/bufferTime.js
        //# sourceMappingURL=bufferCount.js.map
        function bufferTime(bufferTimeSpan, ...otherArgs) {
            var _a, _b;
            const scheduler =
                (_a = popScheduler(otherArgs)) !== null && _a !== void 0
                    ? _a
                    : asyncScheduler;
            const bufferCreationInterval =
                (_b = otherArgs[0]) !== null && _b !== void 0 ? _b : null;
            const maxBufferSize = otherArgs[1] || Infinity;
            return operate((source, subscriber) => {
                let bufferRecords = [];
                let restartOnEmit = false;
                const emit = (record) => {
                    const { buffer, subs } = record;
                    subs.unsubscribe();
                    arrRemove(bufferRecords, record);
                    subscriber.next(buffer);
                    restartOnEmit && startBuffer();
                };
                const startBuffer = () => {
                    if (bufferRecords) {
                        const subs = new Subscription();
                        subscriber.add(subs);
                        const buffer = [];
                        const record = {
                            buffer,
                            subs
                        };
                        bufferRecords.push(record);
                        executeSchedule(
                            subs,
                            scheduler,
                            () => emit(record),
                            bufferTimeSpan
                        );
                    }
                };
                if (bufferCreationInterval !== null && bufferCreationInterval >= 0) {
                    executeSchedule(
                        subscriber,
                        scheduler,
                        startBuffer,
                        bufferCreationInterval,
                        true
                    );
                } else {
                    restartOnEmit = true;
                }
                startBuffer();
                const bufferTimeSubscriber = createOperatorSubscriber(
                    subscriber,
                    (value) => {
                        const recordsCopy = bufferRecords.slice();
                        for (const record of recordsCopy) {
                            const { buffer } = record;
                            buffer.push(value);
                            maxBufferSize <= buffer.length && emit(record);
                        }
                    },
                    () => {
                        while (
                            bufferRecords === null || bufferRecords === void 0
                                ? void 0
                                : bufferRecords.length
                        ) {
                            subscriber.next(bufferRecords.shift().buffer);
                        }
                        bufferTimeSubscriber === null || bufferTimeSubscriber === void 0
                            ? void 0
                            : bufferTimeSubscriber.unsubscribe();
                        subscriber.complete();
                        subscriber.unsubscribe();
                    },
                    undefined,
                    () => (bufferRecords = null)
                );
                source.subscribe(bufferTimeSubscriber);
            });
        } // ./src/esm/internal/operators/bufferToggle.js
        //# sourceMappingURL=bufferTime.js.map
        function bufferToggle(openings, closingSelector) {
            return operate((source, subscriber) => {
                const buffers = [];
                innerFrom(openings).subscribe(
                    createOperatorSubscriber(
                        subscriber,
                        (openValue) => {
                            const buffer = [];
                            buffers.push(buffer);
                            const closingSubscription = new Subscription();
                            const emitBuffer = () => {
                                arrRemove(buffers, buffer);
                                subscriber.next(buffer);
                                closingSubscription.unsubscribe();
                            };
                            closingSubscription.add(
                                innerFrom(closingSelector(openValue)).subscribe(
                                    createOperatorSubscriber(subscriber, emitBuffer, noop)
                                )
                            );
                        },
                        noop
                    )
                );
                source.subscribe(
                    createOperatorSubscriber(
                        subscriber,
                        (value) => {
                            for (const buffer of buffers) {
                                buffer.push(value);
                            }
                        },
                        () => {
                            while (buffers.length > 0) {
                                subscriber.next(buffers.shift());
                            }
                            subscriber.complete();
                        }
                    )
                );
            });
        } // ./src/esm/internal/operators/bufferWhen.js
        //# sourceMappingURL=bufferToggle.js.map
        function bufferWhen(closingSelector) {
            return operate((source, subscriber) => {
                let buffer = null;
                let closingSubscriber = null;
                const openBuffer = () => {
                    closingSubscriber === null || closingSubscriber === void 0
                        ? void 0
                        : closingSubscriber.unsubscribe();
                    const b = buffer;
                    buffer = [];
                    b && subscriber.next(b);
                    innerFrom(closingSelector()).subscribe(
                        (closingSubscriber = createOperatorSubscriber(
                            subscriber,
                            openBuffer,
                            noop
                        ))
                    );
                };
                openBuffer();
                source.subscribe(
                    createOperatorSubscriber(
                        subscriber,
                        (value) =>
                            buffer === null || buffer === void 0
                                ? void 0
                                : buffer.push(value),
                        () => {
                            buffer && subscriber.next(buffer);
                            subscriber.complete();
                        },
                        undefined,
                        () => (buffer = closingSubscriber = null)
                    )
                );
            });
        } // ./src/esm/internal/operators/catchError.js
        //# sourceMappingURL=bufferWhen.js.map
        function catchError(selector) {
            return operate((source, subscriber) => {
                let innerSub = null;
                let syncUnsub = false;
                let handledResult;
                innerSub = source.subscribe(
                    createOperatorSubscriber(subscriber, undefined, undefined, (err) => {
                        handledResult = innerFrom(
                            selector(err, catchError(selector)(source))
                        );
                        if (innerSub) {
                            innerSub.unsubscribe();
                            innerSub = null;
                            handledResult.subscribe(subscriber);
                        } else {
                            syncUnsub = true;
                        }
                    })
                );
                if (syncUnsub) {
                    innerSub.unsubscribe();
                    innerSub = null;
                    handledResult.subscribe(subscriber);
                }
            });
        } // ./src/esm/internal/operators/scanInternals.js
        //# sourceMappingURL=catchError.js.map
        function scanInternals(
            accumulator,
            seed,
            hasSeed,
            emitOnNext,
            emitBeforeComplete
        ) {
            return (source, subscriber) => {
                let hasState = hasSeed;
                let state = seed;
                let index = 0;
                source.subscribe(
                    createOperatorSubscriber(
                        subscriber,
                        (value) => {
                            const i = index++;
                            state = hasState
                                ? accumulator(state, value, i)
                                : ((hasState = true), value);
                            emitOnNext && subscriber.next(state);
                        },
                        emitBeforeComplete &&
                            (() => {
                                hasState && subscriber.next(state);
                                subscriber.complete();
                            })
                    )
                );
            };
        } // ./src/esm/internal/operators/reduce.js
        //# sourceMappingURL=scanInternals.js.map
        function reduce(accumulator, seed) {
            return operate(
                scanInternals(accumulator, seed, arguments.length >= 2, false, true)
            );
        } // ./src/esm/internal/operators/toArray.js
        //# sourceMappingURL=reduce.js.map
        const arrReducer = (arr, value) => (arr.push(value), arr);
        function toArray() {
            return operate((source, subscriber) => {
                reduce(arrReducer, [])(source).subscribe(subscriber);
            });
        } // ./src/esm/internal/operators/joinAllInternals.js
        //# sourceMappingURL=toArray.js.map
        function joinAllInternals(joinFn, project) {
            return pipe(
                toArray(),
                mergeMap((sources) => joinFn(sources)),
                project ? mapOneOrManyArgs(project) : identity
            );
        } // ./src/esm/internal/operators/combineLatestAll.js
        //# sourceMappingURL=joinAllInternals.js.map
        function combineLatestAll(project) {
            return joinAllInternals(combineLatest, project);
        } // ./src/esm/internal/operators/combineAll.js
        //# sourceMappingURL=combineLatestAll.js.map
        const combineAll = combineLatestAll; // ./src/esm/internal/operators/combineLatest.js
        //# sourceMappingURL=combineAll.js.map
        function combineLatest_combineLatest(...args) {
            const resultSelector = popResultSelector(args);
            return resultSelector
                ? pipe(
                      combineLatest_combineLatest(...args),
                      mapOneOrManyArgs(resultSelector)
                  )
                : operate((source, subscriber) => {
                      combineLatestInit([source, ...argsOrArgArray(args)])(subscriber);
                  });
        } // ./src/esm/internal/operators/combineLatestWith.js
        //# sourceMappingURL=combineLatest.js.map
        function combineLatestWith(...otherSources) {
            return combineLatest_combineLatest(...otherSources);
        } // ./src/esm/internal/operators/concatMap.js
        //# sourceMappingURL=combineLatestWith.js.map
        function concatMap(project, resultSelector) {
            return isFunction(resultSelector)
                ? mergeMap(project, resultSelector, 1)
                : mergeMap(project, 1);
        } // ./src/esm/internal/operators/concatMapTo.js
        //# sourceMappingURL=concatMap.js.map
        function concatMapTo(innerObservable, resultSelector) {
            return isFunction(resultSelector)
                ? concatMap(() => innerObservable, resultSelector)
                : concatMap(() => innerObservable);
        } // ./src/esm/internal/operators/concat.js
        //# sourceMappingURL=concatMapTo.js.map
        function concat_concat(...args) {
            const scheduler = popScheduler(args);
            return operate((source, subscriber) => {
                concatAll()(from([source, ...args], scheduler)).subscribe(subscriber);
            });
        } // ./src/esm/internal/operators/concatWith.js
        //# sourceMappingURL=concat.js.map
        function concatWith(...otherSources) {
            return concat_concat(...otherSources);
        } // ./src/esm/internal/observable/fromSubscribable.js
        //# sourceMappingURL=concatWith.js.map
        function fromSubscribable(subscribable) {
            return new Observable((subscriber) => subscribable.subscribe(subscriber));
        } // ./src/esm/internal/operators/connect.js
        //# sourceMappingURL=fromSubscribable.js.map
        const connect_DEFAULT_CONFIG = {
            connector: () => new Subject()
        };
        function connect(selector, config = connect_DEFAULT_CONFIG) {
            const { connector } = config;
            return operate((source, subscriber) => {
                const subject = connector();
                innerFrom(selector(fromSubscribable(subject))).subscribe(subscriber);
                subscriber.add(source.subscribe(subject));
            });
        } // ./src/esm/internal/operators/count.js
        //# sourceMappingURL=connect.js.map
        function count(predicate) {
            return reduce(
                (total, value, i) =>
                    !predicate || predicate(value, i) ? total + 1 : total,
                0
            );
        } // ./src/esm/internal/operators/debounce.js
        //# sourceMappingURL=count.js.map
        function debounce(durationSelector) {
            return operate((source, subscriber) => {
                let hasValue = false;
                let lastValue = null;
                let durationSubscriber = null;
                const emit = () => {
                    durationSubscriber === null || durationSubscriber === void 0
                        ? void 0
                        : durationSubscriber.unsubscribe();
                    durationSubscriber = null;
                    if (hasValue) {
                        hasValue = false;
                        const value = lastValue;
                        lastValue = null;
                        subscriber.next(value);
                    }
                };
                source.subscribe(
                    createOperatorSubscriber(
                        subscriber,
                        (value) => {
                            durationSubscriber === null || durationSubscriber === void 0
                                ? void 0
                                : durationSubscriber.unsubscribe();
                            hasValue = true;
                            lastValue = value;
                            durationSubscriber = createOperatorSubscriber(
                                subscriber,
                                emit,
                                noop
                            );
                            innerFrom(durationSelector(value)).subscribe(
                                durationSubscriber
                            );
                        },
                        () => {
                            emit();
                            subscriber.complete();
                        },
                        undefined,
                        () => {
                            lastValue = durationSubscriber = null;
                        }
                    )
                );
            });
        } // ./src/esm/internal/operators/debounceTime.js
        //# sourceMappingURL=debounce.js.map
        function debounceTime(dueTime, scheduler = asyncScheduler) {
            return operate((source, subscriber) => {
                let activeTask = null;
                let lastValue = null;
                let lastTime = null;
                const emit = () => {
                    if (activeTask) {
                        activeTask.unsubscribe();
                        activeTask = null;
                        const value = lastValue;
                        lastValue = null;
                        subscriber.next(value);
                    }
                };
                function emitWhenIdle() {
                    const targetTime = lastTime + dueTime;
                    const now = scheduler.now();
                    if (now < targetTime) {
                        activeTask = this.schedule(undefined, targetTime - now);
                        subscriber.add(activeTask);
                        return;
                    }
                    emit();
                }
                source.subscribe(
                    createOperatorSubscriber(
                        subscriber,
                        (value) => {
                            lastValue = value;
                            lastTime = scheduler.now();
                            if (!activeTask) {
                                activeTask = scheduler.schedule(emitWhenIdle, dueTime);
                                subscriber.add(activeTask);
                            }
                        },
                        () => {
                            emit();
                            subscriber.complete();
                        },
                        undefined,
                        () => {
                            lastValue = activeTask = null;
                        }
                    )
                );
            });
        } // ./src/esm/internal/operators/defaultIfEmpty.js
        //# sourceMappingURL=debounceTime.js.map
        function defaultIfEmpty(defaultValue) {
            return operate((source, subscriber) => {
                let hasValue = false;
                source.subscribe(
                    createOperatorSubscriber(
                        subscriber,
                        (value) => {
                            hasValue = true;
                            subscriber.next(value);
                        },
                        () => {
                            if (!hasValue) {
                                subscriber.next(defaultValue);
                            }
                            subscriber.complete();
                        }
                    )
                );
            });
        } // ./src/esm/internal/operators/take.js
        //# sourceMappingURL=defaultIfEmpty.js.map
        function take(count) {
            return count <= 0
                ? () => EMPTY
                : operate((source, subscriber) => {
                      let seen = 0;
                      source.subscribe(
                          createOperatorSubscriber(subscriber, (value) => {
                              if (++seen <= count) {
                                  subscriber.next(value);
                                  if (count <= seen) {
                                      subscriber.complete();
                                  }
                              }
                          })
                      );
                  });
        } // ./src/esm/internal/operators/ignoreElements.js
        //# sourceMappingURL=take.js.map
        function ignoreElements() {
            return operate((source, subscriber) => {
                source.subscribe(createOperatorSubscriber(subscriber, noop));
            });
        } // ./src/esm/internal/operators/mapTo.js
        //# sourceMappingURL=ignoreElements.js.map
        function mapTo(value) {
            return map(() => value);
        } // ./src/esm/internal/operators/delayWhen.js
        //# sourceMappingURL=mapTo.js.map
        function delayWhen(delayDurationSelector, subscriptionDelay) {
            if (subscriptionDelay) {
                return (source) =>
                    concat(
                        subscriptionDelay.pipe(take(1), ignoreElements()),
                        source.pipe(delayWhen(delayDurationSelector))
                    );
            }
            return mergeMap((value, index) =>
                innerFrom(delayDurationSelector(value, index)).pipe(take(1), mapTo(value))
            );
        } // ./src/esm/internal/operators/delay.js
        //# sourceMappingURL=delayWhen.js.map
        function delay(due, scheduler = asyncScheduler) {
            const duration = timer(due, scheduler);
            return delayWhen(() => duration);
        } // ./src/esm/internal/operators/dematerialize.js
        //# sourceMappingURL=delay.js.map
        function dematerialize() {
            return operate((source, subscriber) => {
                source.subscribe(
                    createOperatorSubscriber(subscriber, (notification) =>
                        observeNotification(notification, subscriber)
                    )
                );
            });
        } // ./src/esm/internal/operators/distinct.js
        //# sourceMappingURL=dematerialize.js.map
        function distinct(keySelector, flushes) {
            return operate((source, subscriber) => {
                const distinctKeys = new Set();
                source.subscribe(
                    createOperatorSubscriber(subscriber, (value) => {
                        const key = keySelector ? keySelector(value) : value;
                        if (!distinctKeys.has(key)) {
                            distinctKeys.add(key);
                            subscriber.next(value);
                        }
                    })
                );
                flushes &&
                    innerFrom(flushes).subscribe(
                        createOperatorSubscriber(
                            subscriber,
                            () => distinctKeys.clear(),
                            noop
                        )
                    );
            });
        } // ./src/esm/internal/operators/distinctUntilChanged.js
        //# sourceMappingURL=distinct.js.map
        function distinctUntilChanged(comparator, keySelector = identity) {
            comparator =
                comparator !== null && comparator !== void 0
                    ? comparator
                    : defaultCompare;
            return operate((source, subscriber) => {
                let previousKey;
                let first = true;
                source.subscribe(
                    createOperatorSubscriber(subscriber, (value) => {
                        const currentKey = keySelector(value);
                        if (first || !comparator(previousKey, currentKey)) {
                            first = false;
                            previousKey = currentKey;
                            subscriber.next(value);
                        }
                    })
                );
            });
        }
        function defaultCompare(a, b) {
            return a === b;
        } // ./src/esm/internal/operators/distinctUntilKeyChanged.js
        //# sourceMappingURL=distinctUntilChanged.js.map
        function distinctUntilKeyChanged(key, compare) {
            return distinctUntilChanged((x, y) =>
                compare ? compare(x[key], y[key]) : x[key] === y[key]
            );
        } // ./src/esm/internal/operators/throwIfEmpty.js
        //# sourceMappingURL=distinctUntilKeyChanged.js.map
        function throwIfEmpty(errorFactory = defaultErrorFactory) {
            return operate((source, subscriber) => {
                let hasValue = false;
                source.subscribe(
                    createOperatorSubscriber(
                        subscriber,
                        (value) => {
                            hasValue = true;
                            subscriber.next(value);
                        },
                        () =>
                            hasValue
                                ? subscriber.complete()
                                : subscriber.error(errorFactory())
                    )
                );
            });
        }
        function defaultErrorFactory() {
            return new EmptyError();
        } // ./src/esm/internal/operators/elementAt.js
        //# sourceMappingURL=throwIfEmpty.js.map
        function elementAt(index, defaultValue) {
            if (index < 0) {
                throw new ArgumentOutOfRangeError();
            }
            const hasDefaultValue = arguments.length >= 2;
            return (source) =>
                source.pipe(
                    filter((v, i) => i === index),
                    take(1),
                    hasDefaultValue
                        ? defaultIfEmpty(defaultValue)
                        : throwIfEmpty(() => new ArgumentOutOfRangeError())
                );
        } // ./src/esm/internal/operators/endWith.js
        //# sourceMappingURL=elementAt.js.map
        function endWith(...values) {
            return (source) => concat(source, of(...values));
        } // ./src/esm/internal/operators/every.js
        //# sourceMappingURL=endWith.js.map
        function every(predicate, thisArg) {
            return operate((source, subscriber) => {
                let index = 0;
                source.subscribe(
                    createOperatorSubscriber(
                        subscriber,
                        (value) => {
                            if (!predicate.call(thisArg, value, index++, source)) {
                                subscriber.next(false);
                                subscriber.complete();
                            }
                        },
                        () => {
                            subscriber.next(true);
                            subscriber.complete();
                        }
                    )
                );
            });
        } // ./src/esm/internal/operators/exhaustMap.js
        //# sourceMappingURL=every.js.map
        function exhaustMap(project, resultSelector) {
            if (resultSelector) {
                return (source) =>
                    source.pipe(
                        exhaustMap((a, i) =>
                            innerFrom(project(a, i)).pipe(
                                map((b, ii) => resultSelector(a, b, i, ii))
                            )
                        )
                    );
            }
            return operate((source, subscriber) => {
                let index = 0;
                let innerSub = null;
                let isComplete = false;
                source.subscribe(
                    createOperatorSubscriber(
                        subscriber,
                        (outerValue) => {
                            if (!innerSub) {
                                innerSub = createOperatorSubscriber(
                                    subscriber,
                                    undefined,
                                    () => {
                                        innerSub = null;
                                        isComplete && subscriber.complete();
                                    }
                                );
                                innerFrom(project(outerValue, index++)).subscribe(
                                    innerSub
                                );
                            }
                        },
                        () => {
                            isComplete = true;
                            !innerSub && subscriber.complete();
                        }
                    )
                );
            });
        } // ./src/esm/internal/operators/exhaustAll.js
        //# sourceMappingURL=exhaustMap.js.map
        function exhaustAll() {
            return exhaustMap(identity);
        } // ./src/esm/internal/operators/exhaust.js
        //# sourceMappingURL=exhaustAll.js.map
        const exhaust = exhaustAll; // ./src/esm/internal/operators/expand.js
        //# sourceMappingURL=exhaust.js.map
        function expand(project, concurrent = Infinity, scheduler) {
            concurrent = (concurrent || 0) < 1 ? Infinity : concurrent;
            return operate((source, subscriber) =>
                mergeInternals(
                    source,
                    subscriber,
                    project,
                    concurrent,
                    undefined,
                    true,
                    scheduler
                )
            );
        } // ./src/esm/internal/operators/finalize.js
        //# sourceMappingURL=expand.js.map
        function finalize(callback) {
            return operate((source, subscriber) => {
                try {
                    source.subscribe(subscriber);
                } finally {
                    subscriber.add(callback);
                }
            });
        } // ./src/esm/internal/operators/find.js
        //# sourceMappingURL=finalize.js.map
        function find(predicate, thisArg) {
            return operate(createFind(predicate, thisArg, "value"));
        }
        function createFind(predicate, thisArg, emit) {
            const findIndex = emit === "index";
            return (source, subscriber) => {
                let index = 0;
                source.subscribe(
                    createOperatorSubscriber(
                        subscriber,
                        (value) => {
                            const i = index++;
                            if (predicate.call(thisArg, value, i, source)) {
                                subscriber.next(findIndex ? i : value);
                                subscriber.complete();
                            }
                        },
                        () => {
                            subscriber.next(findIndex ? -1 : undefined);
                            subscriber.complete();
                        }
                    )
                );
            };
        } // ./src/esm/internal/operators/findIndex.js
        //# sourceMappingURL=find.js.map
        function findIndex(predicate, thisArg) {
            return operate(createFind(predicate, thisArg, "index"));
        } // ./src/esm/internal/operators/first.js
        //# sourceMappingURL=findIndex.js.map
        function first(predicate, defaultValue) {
            const hasDefaultValue = arguments.length >= 2;
            return (source) =>
                source.pipe(
                    predicate ? filter((v, i) => predicate(v, i, source)) : identity,
                    take(1),
                    hasDefaultValue
                        ? defaultIfEmpty(defaultValue)
                        : throwIfEmpty(() => new EmptyError())
                );
        } // ./src/esm/internal/operators/groupBy.js
        //# sourceMappingURL=first.js.map
        function groupBy(keySelector, elementOrOptions, duration, connector) {
            return operate((source, subscriber) => {
                let element;
                if (!elementOrOptions || typeof elementOrOptions === "function") {
                    element = elementOrOptions;
                } else {
                    ({ duration, element, connector } = elementOrOptions);
                }
                const groups = new Map();
                const notify = (cb) => {
                    groups.forEach(cb);
                    cb(subscriber);
                };
                const handleError = (err) => notify((consumer) => consumer.error(err));
                let activeGroups = 0;
                let teardownAttempted = false;
                const groupBySourceSubscriber = new OperatorSubscriber(
                    subscriber,
                    (value) => {
                        try {
                            const key = keySelector(value);
                            let group = groups.get(key);
                            if (!group) {
                                groups.set(
                                    key,
                                    (group = connector ? connector() : new Subject())
                                );
                                const grouped = createGroupedObservable(key, group);
                                subscriber.next(grouped);
                                if (duration) {
                                    const durationSubscriber = createOperatorSubscriber(
                                        group,
                                        () => {
                                            group.complete();
                                            durationSubscriber === null ||
                                            durationSubscriber === void 0
                                                ? void 0
                                                : durationSubscriber.unsubscribe();
                                        },
                                        undefined,
                                        undefined,
                                        () => groups.delete(key)
                                    );
                                    groupBySourceSubscriber.add(
                                        innerFrom(duration(grouped)).subscribe(
                                            durationSubscriber
                                        )
                                    );
                                }
                            }
                            group.next(element ? element(value) : value);
                        } catch (err) {
                            handleError(err);
                        }
                    },
                    () => notify((consumer) => consumer.complete()),
                    handleError,
                    () => groups.clear(),
                    () => {
                        teardownAttempted = true;
                        return activeGroups === 0;
                    }
                );
                source.subscribe(groupBySourceSubscriber);
                function createGroupedObservable(key, groupSubject) {
                    const result = new Observable((groupSubscriber) => {
                        activeGroups++;
                        const innerSub = groupSubject.subscribe(groupSubscriber);
                        return () => {
                            innerSub.unsubscribe();
                            --activeGroups === 0 &&
                                teardownAttempted &&
                                groupBySourceSubscriber.unsubscribe();
                        };
                    });
                    result.key = key;
                    return result;
                }
            });
        } // ./src/esm/internal/operators/isEmpty.js
        //# sourceMappingURL=groupBy.js.map
        function isEmpty() {
            return operate((source, subscriber) => {
                source.subscribe(
                    createOperatorSubscriber(
                        subscriber,
                        () => {
                            subscriber.next(false);
                            subscriber.complete();
                        },
                        () => {
                            subscriber.next(true);
                            subscriber.complete();
                        }
                    )
                );
            });
        } // ./src/esm/internal/operators/takeLast.js
        //# sourceMappingURL=isEmpty.js.map
        function takeLast(count) {
            return count <= 0
                ? () => EMPTY
                : operate((source, subscriber) => {
                      let buffer = [];
                      source.subscribe(
                          createOperatorSubscriber(
                              subscriber,
                              (value) => {
                                  buffer.push(value);
                                  count < buffer.length && buffer.shift();
                              },
                              () => {
                                  for (const value of buffer) {
                                      subscriber.next(value);
                                  }
                                  subscriber.complete();
                              },
                              undefined,
                              () => {
                                  buffer = null;
                              }
                          )
                      );
                  });
        } // ./src/esm/internal/operators/last.js
        //# sourceMappingURL=takeLast.js.map
        function last_last(predicate, defaultValue) {
            const hasDefaultValue = arguments.length >= 2;
            return (source) =>
                source.pipe(
                    predicate ? filter((v, i) => predicate(v, i, source)) : identity,
                    takeLast(1),
                    hasDefaultValue
                        ? defaultIfEmpty(defaultValue)
                        : throwIfEmpty(() => new EmptyError())
                );
        } // ./src/esm/internal/operators/materialize.js
        //# sourceMappingURL=last.js.map
        function materialize() {
            return operate((source, subscriber) => {
                source.subscribe(
                    createOperatorSubscriber(
                        subscriber,
                        (value) => {
                            subscriber.next(Notification.createNext(value));
                        },
                        () => {
                            subscriber.next(Notification.createComplete());
                            subscriber.complete();
                        },
                        (err) => {
                            subscriber.next(Notification.createError(err));
                            subscriber.complete();
                        }
                    )
                );
            });
        } // ./src/esm/internal/operators/max.js
        //# sourceMappingURL=materialize.js.map
        function max(comparer) {
            return reduce(
                isFunction(comparer)
                    ? (x, y) => (comparer(x, y) > 0 ? x : y)
                    : (x, y) => (x > y ? x : y)
            );
        } // ./src/esm/internal/operators/flatMap.js
        //# sourceMappingURL=max.js.map
        const flatMap = mergeMap; // ./src/esm/internal/operators/mergeMapTo.js
        //# sourceMappingURL=flatMap.js.map
        function mergeMapTo(innerObservable, resultSelector, concurrent = Infinity) {
            if (isFunction(resultSelector)) {
                return mergeMap(() => innerObservable, resultSelector, concurrent);
            }
            if (typeof resultSelector === "number") {
                concurrent = resultSelector;
            }
            return mergeMap(() => innerObservable, concurrent);
        } // ./src/esm/internal/operators/mergeScan.js
        //# sourceMappingURL=mergeMapTo.js.map
        function mergeScan(accumulator, seed, concurrent = Infinity) {
            return operate((source, subscriber) => {
                let state = seed;
                return mergeInternals(
                    source,
                    subscriber,
                    (value, index) => accumulator(state, value, index),
                    concurrent,
                    (value) => {
                        state = value;
                    },
                    false,
                    undefined,
                    () => (state = null)
                );
            });
        } // ./src/esm/internal/operators/merge.js
        //# sourceMappingURL=mergeScan.js.map
        function merge_merge(...args) {
            const scheduler = popScheduler(args);
            const concurrent = popNumber(args, Infinity);
            return operate((source, subscriber) => {
                mergeAll(concurrent)(from([source, ...args], scheduler)).subscribe(
                    subscriber
                );
            });
        } // ./src/esm/internal/operators/mergeWith.js
        //# sourceMappingURL=merge.js.map
        function mergeWith(...otherSources) {
            return merge_merge(...otherSources);
        } // ./src/esm/internal/operators/min.js
        //# sourceMappingURL=mergeWith.js.map
        function min(comparer) {
            return reduce(
                isFunction(comparer)
                    ? (x, y) => (comparer(x, y) < 0 ? x : y)
                    : (x, y) => (x < y ? x : y)
            );
        } // ./src/esm/internal/operators/multicast.js
        //# sourceMappingURL=min.js.map
        function multicast(subjectOrSubjectFactory, selector) {
            const subjectFactory = isFunction(subjectOrSubjectFactory)
                ? subjectOrSubjectFactory
                : () => subjectOrSubjectFactory;
            if (isFunction(selector)) {
                return connect(selector, {
                    connector: subjectFactory
                });
            }
            return (source) => new ConnectableObservable(source, subjectFactory);
        } // ./src/esm/internal/operators/onErrorResumeNextWith.js
        //# sourceMappingURL=multicast.js.map
        function onErrorResumeNextWith(...sources) {
            const nextSources = argsOrArgArray(sources);
            return (source) => onErrorResumeNext(source, ...nextSources);
        }
        const onErrorResumeNextWith_onErrorResumeNext =
            /* unused pure expression or super */ null && onErrorResumeNextWith; // ./src/esm/internal/operators/pairwise.js
        //# sourceMappingURL=onErrorResumeNextWith.js.map
        function pairwise() {
            return operate((source, subscriber) => {
                let prev;
                let hasPrev = false;
                source.subscribe(
                    createOperatorSubscriber(subscriber, (value) => {
                        const p = prev;
                        prev = value;
                        hasPrev && subscriber.next([p, value]);
                        hasPrev = true;
                    })
                );
            });
        } // ./src/esm/internal/operators/pluck.js
        //# sourceMappingURL=pairwise.js.map
        function pluck(...properties) {
            const length = properties.length;
            if (length === 0) {
                throw new Error("list of properties cannot be empty.");
            }
            return map((x) => {
                let currentProp = x;
                for (let i = 0; i < length; i++) {
                    const p =
                        currentProp === null || currentProp === void 0
                            ? void 0
                            : currentProp[properties[i]];
                    if (typeof p !== "undefined") {
                        currentProp = p;
                    } else {
                        return undefined;
                    }
                }
                return currentProp;
            });
        } // ./src/esm/internal/operators/publish.js
        //# sourceMappingURL=pluck.js.map
        function publish(selector) {
            return selector
                ? (source) => connect(selector)(source)
                : (source) => multicast(new Subject())(source);
        } // ./src/esm/internal/operators/publishBehavior.js
        //# sourceMappingURL=publish.js.map
        function publishBehavior(initialValue) {
            return (source) => {
                const subject = new BehaviorSubject(initialValue);
                return new ConnectableObservable(source, () => subject);
            };
        } // ./src/esm/internal/operators/publishLast.js
        //# sourceMappingURL=publishBehavior.js.map
        function publishLast() {
            return (source) => {
                const subject = new AsyncSubject();
                return new ConnectableObservable(source, () => subject);
            };
        } // ./src/esm/internal/operators/publishReplay.js
        //# sourceMappingURL=publishLast.js.map
        function publishReplay(
            bufferSize,
            windowTime,
            selectorOrScheduler,
            timestampProvider
        ) {
            if (selectorOrScheduler && !isFunction(selectorOrScheduler)) {
                timestampProvider = selectorOrScheduler;
            }
            const selector = isFunction(selectorOrScheduler)
                ? selectorOrScheduler
                : undefined;
            return (source) =>
                multicast(
                    new ReplaySubject(bufferSize, windowTime, timestampProvider),
                    selector
                )(source);
        } // ./src/esm/internal/operators/raceWith.js
        //# sourceMappingURL=publishReplay.js.map
        function raceWith(...otherSources) {
            return !otherSources.length
                ? identity
                : operate((source, subscriber) => {
                      raceInit([source, ...otherSources])(subscriber);
                  });
        } // ./src/esm/internal/operators/repeat.js
        //# sourceMappingURL=raceWith.js.map
        function repeat(countOrConfig) {
            let count = Infinity;
            let delay;
            if (countOrConfig != null) {
                if (typeof countOrConfig === "object") {
                    ({ count = Infinity, delay } = countOrConfig);
                } else {
                    count = countOrConfig;
                }
            }
            return count <= 0
                ? () => EMPTY
                : operate((source, subscriber) => {
                      let soFar = 0;
                      let sourceSub;
                      const resubscribe = () => {
                          sourceSub === null || sourceSub === void 0
                              ? void 0
                              : sourceSub.unsubscribe();
                          sourceSub = null;
                          if (delay != null) {
                              const notifier =
                                  typeof delay === "number"
                                      ? timer(delay)
                                      : innerFrom(delay(soFar));
                              const notifierSubscriber = createOperatorSubscriber(
                                  subscriber,
                                  () => {
                                      notifierSubscriber.unsubscribe();
                                      subscribeToSource();
                                  }
                              );
                              notifier.subscribe(notifierSubscriber);
                          } else {
                              subscribeToSource();
                          }
                      };
                      const subscribeToSource = () => {
                          let syncUnsub = false;
                          sourceSub = source.subscribe(
                              createOperatorSubscriber(subscriber, undefined, () => {
                                  if (++soFar < count) {
                                      if (sourceSub) {
                                          resubscribe();
                                      } else {
                                          syncUnsub = true;
                                      }
                                  } else {
                                      subscriber.complete();
                                  }
                              })
                          );
                          if (syncUnsub) {
                              resubscribe();
                          }
                      };
                      subscribeToSource();
                  });
        } // ./src/esm/internal/operators/repeatWhen.js
        //# sourceMappingURL=repeat.js.map
        function repeatWhen(notifier) {
            return operate((source, subscriber) => {
                let innerSub;
                let syncResub = false;
                let completions$;
                let isNotifierComplete = false;
                let isMainComplete = false;
                const checkComplete = () =>
                    isMainComplete && isNotifierComplete && (subscriber.complete(), true);
                const getCompletionSubject = () => {
                    if (!completions$) {
                        completions$ = new Subject();
                        innerFrom(notifier(completions$)).subscribe(
                            createOperatorSubscriber(
                                subscriber,
                                () => {
                                    if (innerSub) {
                                        subscribeForRepeatWhen();
                                    } else {
                                        syncResub = true;
                                    }
                                },
                                () => {
                                    isNotifierComplete = true;
                                    checkComplete();
                                }
                            )
                        );
                    }
                    return completions$;
                };
                const subscribeForRepeatWhen = () => {
                    isMainComplete = false;
                    innerSub = source.subscribe(
                        createOperatorSubscriber(subscriber, undefined, () => {
                            isMainComplete = true;
                            !checkComplete() && getCompletionSubject().next();
                        })
                    );
                    if (syncResub) {
                        innerSub.unsubscribe();
                        innerSub = null;
                        syncResub = false;
                        subscribeForRepeatWhen();
                    }
                };
                subscribeForRepeatWhen();
            });
        } // ./src/esm/internal/operators/retry.js
        //# sourceMappingURL=repeatWhen.js.map
        function retry(configOrCount = Infinity) {
            let config;
            if (configOrCount && typeof configOrCount === "object") {
                config = configOrCount;
            } else {
                config = {
                    count: configOrCount
                };
            }
            const {
                count = Infinity,
                delay,
                resetOnSuccess: resetOnSuccess = false
            } = config;
            return count <= 0
                ? identity
                : operate((source, subscriber) => {
                      let soFar = 0;
                      let innerSub;
                      const subscribeForRetry = () => {
                          let syncUnsub = false;
                          innerSub = source.subscribe(
                              createOperatorSubscriber(
                                  subscriber,
                                  (value) => {
                                      if (resetOnSuccess) {
                                          soFar = 0;
                                      }
                                      subscriber.next(value);
                                  },
                                  undefined,
                                  (err) => {
                                      if (soFar++ < count) {
                                          const resub = () => {
                                              if (innerSub) {
                                                  innerSub.unsubscribe();
                                                  innerSub = null;
                                                  subscribeForRetry();
                                              } else {
                                                  syncUnsub = true;
                                              }
                                          };
                                          if (delay != null) {
                                              const notifier =
                                                  typeof delay === "number"
                                                      ? timer(delay)
                                                      : innerFrom(delay(err, soFar));
                                              const notifierSubscriber =
                                                  createOperatorSubscriber(
                                                      subscriber,
                                                      () => {
                                                          notifierSubscriber.unsubscribe();
                                                          resub();
                                                      },
                                                      () => {
                                                          subscriber.complete();
                                                      }
                                                  );
                                              notifier.subscribe(notifierSubscriber);
                                          } else {
                                              resub();
                                          }
                                      } else {
                                          subscriber.error(err);
                                      }
                                  }
                              )
                          );
                          if (syncUnsub) {
                              innerSub.unsubscribe();
                              innerSub = null;
                              subscribeForRetry();
                          }
                      };
                      subscribeForRetry();
                  });
        } // ./src/esm/internal/operators/retryWhen.js
        //# sourceMappingURL=retry.js.map
        function retryWhen(notifier) {
            return operate((source, subscriber) => {
                let innerSub;
                let syncResub = false;
                let errors$;
                const subscribeForRetryWhen = () => {
                    innerSub = source.subscribe(
                        createOperatorSubscriber(
                            subscriber,
                            undefined,
                            undefined,
                            (err) => {
                                if (!errors$) {
                                    errors$ = new Subject();
                                    innerFrom(notifier(errors$)).subscribe(
                                        createOperatorSubscriber(subscriber, () =>
                                            innerSub
                                                ? subscribeForRetryWhen()
                                                : (syncResub = true)
                                        )
                                    );
                                }
                                if (errors$) {
                                    errors$.next(err);
                                }
                            }
                        )
                    );
                    if (syncResub) {
                        innerSub.unsubscribe();
                        innerSub = null;
                        syncResub = false;
                        subscribeForRetryWhen();
                    }
                };
                subscribeForRetryWhen();
            });
        } // ./src/esm/internal/operators/sample.js
        //# sourceMappingURL=retryWhen.js.map
        function sample(notifier) {
            return operate((source, subscriber) => {
                let hasValue = false;
                let lastValue = null;
                source.subscribe(
                    createOperatorSubscriber(subscriber, (value) => {
                        hasValue = true;
                        lastValue = value;
                    })
                );
                innerFrom(notifier).subscribe(
                    createOperatorSubscriber(
                        subscriber,
                        () => {
                            if (hasValue) {
                                hasValue = false;
                                const value = lastValue;
                                lastValue = null;
                                subscriber.next(value);
                            }
                        },
                        noop
                    )
                );
            });
        } // ./src/esm/internal/operators/sampleTime.js
        //# sourceMappingURL=sample.js.map
        function sampleTime(period, scheduler = asyncScheduler) {
            return sample(interval(period, scheduler));
        } // ./src/esm/internal/operators/scan.js
        //# sourceMappingURL=sampleTime.js.map
        function scan(accumulator, seed) {
            return operate(scanInternals(accumulator, seed, arguments.length >= 2, true));
        } // ./src/esm/internal/operators/sequenceEqual.js
        //# sourceMappingURL=scan.js.map
        function sequenceEqual(compareTo, comparator = (a, b) => a === b) {
            return operate((source, subscriber) => {
                const aState = createState();
                const bState = createState();
                const emit = (isEqual) => {
                    subscriber.next(isEqual);
                    subscriber.complete();
                };
                const createSubscriber = (selfState, otherState) => {
                    const sequenceEqualSubscriber = createOperatorSubscriber(
                        subscriber,
                        (a) => {
                            const { buffer, complete } = otherState;
                            if (buffer.length === 0) {
                                complete ? emit(false) : selfState.buffer.push(a);
                            } else {
                                !comparator(a, buffer.shift()) && emit(false);
                            }
                        },
                        () => {
                            selfState.complete = true;
                            const { complete, buffer } = otherState;
                            complete && emit(buffer.length === 0);
                            sequenceEqualSubscriber === null ||
                            sequenceEqualSubscriber === void 0
                                ? void 0
                                : sequenceEqualSubscriber.unsubscribe();
                        }
                    );
                    return sequenceEqualSubscriber;
                };
                source.subscribe(createSubscriber(aState, bState));
                innerFrom(compareTo).subscribe(createSubscriber(bState, aState));
            });
        }
        function createState() {
            return {
                buffer: [],
                complete: false
            };
        } // ./src/esm/internal/operators/share.js
        //# sourceMappingURL=sequenceEqual.js.map
        function share(options = {}) {
            const {
                connector = () => new Subject(),
                resetOnError = true,
                resetOnComplete = true,
                resetOnRefCountZero = true
            } = options;
            return (wrapperSource) => {
                let connection;
                let resetConnection;
                let subject;
                let refCount = 0;
                let hasCompleted = false;
                let hasErrored = false;
                const cancelReset = () => {
                    resetConnection === null || resetConnection === void 0
                        ? void 0
                        : resetConnection.unsubscribe();
                    resetConnection = undefined;
                };
                const reset = () => {
                    cancelReset();
                    connection = subject = undefined;
                    hasCompleted = hasErrored = false;
                };
                const resetAndUnsubscribe = () => {
                    const conn = connection;
                    reset();
                    conn === null || conn === void 0 ? void 0 : conn.unsubscribe();
                };
                return operate((source, subscriber) => {
                    refCount++;
                    if (!hasErrored && !hasCompleted) {
                        cancelReset();
                    }
                    const dest = (subject =
                        subject !== null && subject !== void 0 ? subject : connector());
                    subscriber.add(() => {
                        refCount--;
                        if (refCount === 0 && !hasErrored && !hasCompleted) {
                            resetConnection = handleReset(
                                resetAndUnsubscribe,
                                resetOnRefCountZero
                            );
                        }
                    });
                    dest.subscribe(subscriber);
                    if (!connection && refCount > 0) {
                        connection = new SafeSubscriber({
                            next: (value) => dest.next(value),
                            error: (err) => {
                                hasErrored = true;
                                cancelReset();
                                resetConnection = handleReset(reset, resetOnError, err);
                                dest.error(err);
                            },
                            complete: () => {
                                hasCompleted = true;
                                cancelReset();
                                resetConnection = handleReset(reset, resetOnComplete);
                                dest.complete();
                            }
                        });
                        innerFrom(source).subscribe(connection);
                    }
                })(wrapperSource);
            };
        }
        function handleReset(reset, on, ...args) {
            if (on === true) {
                reset();
                return;
            }
            if (on === false) {
                return;
            }
            const onSubscriber = new SafeSubscriber({
                next: () => {
                    onSubscriber.unsubscribe();
                    reset();
                }
            });
            return innerFrom(on(...args)).subscribe(onSubscriber);
        } // ./src/esm/internal/operators/shareReplay.js
        //# sourceMappingURL=share.js.map
        function shareReplay(configOrBufferSize, windowTime, scheduler) {
            let bufferSize;
            let refCount = false;
            if (configOrBufferSize && typeof configOrBufferSize === "object") {
                ({
                    bufferSize = Infinity,
                    windowTime = Infinity,
                    refCount = false,
                    scheduler
                } = configOrBufferSize);
            } else {
                bufferSize =
                    configOrBufferSize !== null && configOrBufferSize !== void 0
                        ? configOrBufferSize
                        : Infinity;
            }
            return share({
                connector: () => new ReplaySubject(bufferSize, windowTime, scheduler),
                resetOnError: true,
                resetOnComplete: false,
                resetOnRefCountZero: refCount
            });
        } // ./src/esm/internal/operators/single.js
        //# sourceMappingURL=shareReplay.js.map
        function single(predicate) {
            return operate((source, subscriber) => {
                let hasValue = false;
                let singleValue;
                let seenValue = false;
                let index = 0;
                source.subscribe(
                    createOperatorSubscriber(
                        subscriber,
                        (value) => {
                            seenValue = true;
                            if (!predicate || predicate(value, index++, source)) {
                                hasValue &&
                                    subscriber.error(
                                        new SequenceError("Too many matching values")
                                    );
                                hasValue = true;
                                singleValue = value;
                            }
                        },
                        () => {
                            if (hasValue) {
                                subscriber.next(singleValue);
                                subscriber.complete();
                            } else {
                                subscriber.error(
                                    seenValue
                                        ? new NotFoundError("No matching values")
                                        : new EmptyError()
                                );
                            }
                        }
                    )
                );
            });
        } // ./src/esm/internal/operators/skip.js
        //# sourceMappingURL=single.js.map
        function skip(count) {
            return filter((_, index) => count <= index);
        } // ./src/esm/internal/operators/skipLast.js
        //# sourceMappingURL=skip.js.map
        function skipLast(skipCount) {
            return skipCount <= 0
                ? identity
                : operate((source, subscriber) => {
                      let ring = new Array(skipCount);
                      let seen = 0;
                      source.subscribe(
                          createOperatorSubscriber(subscriber, (value) => {
                              const valueIndex = seen++;
                              if (valueIndex < skipCount) {
                                  ring[valueIndex] = value;
                              } else {
                                  const index = valueIndex % skipCount;
                                  const oldValue = ring[index];
                                  ring[index] = value;
                                  subscriber.next(oldValue);
                              }
                          })
                      );
                      return () => {
                          ring = null;
                      };
                  });
        } // ./src/esm/internal/operators/skipUntil.js
        //# sourceMappingURL=skipLast.js.map
        function skipUntil(notifier) {
            return operate((source, subscriber) => {
                let taking = false;
                const skipSubscriber = createOperatorSubscriber(
                    subscriber,
                    () => {
                        skipSubscriber === null || skipSubscriber === void 0
                            ? void 0
                            : skipSubscriber.unsubscribe();
                        taking = true;
                    },
                    noop
                );
                innerFrom(notifier).subscribe(skipSubscriber);
                source.subscribe(
                    createOperatorSubscriber(
                        subscriber,
                        (value) => taking && subscriber.next(value)
                    )
                );
            });
        } // ./src/esm/internal/operators/skipWhile.js
        //# sourceMappingURL=skipUntil.js.map
        function skipWhile(predicate) {
            return operate((source, subscriber) => {
                let taking = false;
                let index = 0;
                source.subscribe(
                    createOperatorSubscriber(
                        subscriber,
                        (value) =>
                            (taking || (taking = !predicate(value, index++))) &&
                            subscriber.next(value)
                    )
                );
            });
        } // ./src/esm/internal/operators/startWith.js
        //# sourceMappingURL=skipWhile.js.map
        function startWith(...values) {
            const scheduler = popScheduler(values);
            return operate((source, subscriber) => {
                (scheduler
                    ? concat(values, source, scheduler)
                    : concat(values, source)
                ).subscribe(subscriber);
            });
        } // ./src/esm/internal/operators/switchMap.js
        //# sourceMappingURL=startWith.js.map
        function switchMap(project, resultSelector) {
            return operate((source, subscriber) => {
                let innerSubscriber = null;
                let index = 0;
                let isComplete = false;
                const checkComplete = () =>
                    isComplete && !innerSubscriber && subscriber.complete();
                source.subscribe(
                    createOperatorSubscriber(
                        subscriber,
                        (value) => {
                            innerSubscriber === null || innerSubscriber === void 0
                                ? void 0
                                : innerSubscriber.unsubscribe();
                            let innerIndex = 0;
                            const outerIndex = index++;
                            innerFrom(project(value, outerIndex)).subscribe(
                                (innerSubscriber = createOperatorSubscriber(
                                    subscriber,
                                    (innerValue) =>
                                        subscriber.next(
                                            resultSelector
                                                ? resultSelector(
                                                      value,
                                                      innerValue,
                                                      outerIndex,
                                                      innerIndex++
                                                  )
                                                : innerValue
                                        ),
                                    () => {
                                        innerSubscriber = null;
                                        checkComplete();
                                    }
                                ))
                            );
                        },
                        () => {
                            isComplete = true;
                            checkComplete();
                        }
                    )
                );
            });
        } // ./src/esm/internal/operators/switchAll.js
        //# sourceMappingURL=switchMap.js.map
        function switchAll() {
            return switchMap(identity);
        } // ./src/esm/internal/operators/switchMapTo.js
        //# sourceMappingURL=switchAll.js.map
        function switchMapTo(innerObservable, resultSelector) {
            return isFunction(resultSelector)
                ? switchMap(() => innerObservable, resultSelector)
                : switchMap(() => innerObservable);
        } // ./src/esm/internal/operators/switchScan.js
        //# sourceMappingURL=switchMapTo.js.map
        function switchScan(accumulator, seed) {
            return operate((source, subscriber) => {
                let state = seed;
                switchMap(
                    (value, index) => accumulator(state, value, index),
                    (_, innerValue) => ((state = innerValue), innerValue)
                )(source).subscribe(subscriber);
                return () => {
                    state = null;
                };
            });
        } // ./src/esm/internal/operators/takeUntil.js
        //# sourceMappingURL=switchScan.js.map
        function takeUntil(notifier) {
            return operate((source, subscriber) => {
                innerFrom(notifier).subscribe(
                    createOperatorSubscriber(
                        subscriber,
                        () => subscriber.complete(),
                        noop
                    )
                );
                !subscriber.closed && source.subscribe(subscriber);
            });
        } // ./src/esm/internal/operators/takeWhile.js
        //# sourceMappingURL=takeUntil.js.map
        function takeWhile(predicate, inclusive = false) {
            return operate((source, subscriber) => {
                let index = 0;
                source.subscribe(
                    createOperatorSubscriber(subscriber, (value) => {
                        const result = predicate(value, index++);
                        (result || inclusive) && subscriber.next(value);
                        !result && subscriber.complete();
                    })
                );
            });
        } // ./src/esm/internal/operators/tap.js
        //# sourceMappingURL=takeWhile.js.map
        function tap(observerOrNext, error, complete) {
            const tapObserver =
                isFunction(observerOrNext) || error || complete
                    ? { next: observerOrNext, error, complete }
                    : observerOrNext;
            return tapObserver
                ? operate((source, subscriber) => {
                      var _a;
                      (_a = tapObserver.subscribe) === null || _a === void 0
                          ? void 0
                          : _a.call(tapObserver);
                      let isUnsub = true;
                      source.subscribe(
                          createOperatorSubscriber(
                              subscriber,
                              (value) => {
                                  var _a;
                                  (_a = tapObserver.next) === null || _a === void 0
                                      ? void 0
                                      : _a.call(tapObserver, value);
                                  subscriber.next(value);
                              },
                              () => {
                                  var _a;
                                  isUnsub = false;
                                  (_a = tapObserver.complete) === null || _a === void 0
                                      ? void 0
                                      : _a.call(tapObserver);
                                  subscriber.complete();
                              },
                              (err) => {
                                  var _a;
                                  isUnsub = false;
                                  (_a = tapObserver.error) === null || _a === void 0
                                      ? void 0
                                      : _a.call(tapObserver, err);
                                  subscriber.error(err);
                              },
                              () => {
                                  var _a, _b;
                                  if (isUnsub) {
                                      (_a = tapObserver.unsubscribe) === null ||
                                      _a === void 0
                                          ? void 0
                                          : _a.call(tapObserver);
                                  }
                                  (_b = tapObserver.finalize) === null || _b === void 0
                                      ? void 0
                                      : _b.call(tapObserver);
                              }
                          )
                      );
                  })
                : identity;
        } // ./src/esm/internal/operators/throttle.js
        //# sourceMappingURL=tap.js.map
        function throttle(durationSelector, config) {
            return operate((source, subscriber) => {
                const { leading = true, trailing = false } =
                    config !== null && config !== void 0 ? config : {};
                let hasValue = false;
                let sendValue = null;
                let throttled = null;
                let isComplete = false;
                const endThrottling = () => {
                    throttled === null || throttled === void 0
                        ? void 0
                        : throttled.unsubscribe();
                    throttled = null;
                    if (trailing) {
                        send();
                        isComplete && subscriber.complete();
                    }
                };
                const cleanupThrottling = () => {
                    throttled = null;
                    isComplete && subscriber.complete();
                };
                const startThrottle = (value) =>
                    (throttled = innerFrom(durationSelector(value)).subscribe(
                        createOperatorSubscriber(
                            subscriber,
                            endThrottling,
                            cleanupThrottling
                        )
                    ));
                const send = () => {
                    if (hasValue) {
                        hasValue = false;
                        const value = sendValue;
                        sendValue = null;
                        subscriber.next(value);
                        !isComplete && startThrottle(value);
                    }
                };
                source.subscribe(
                    createOperatorSubscriber(
                        subscriber,
                        (value) => {
                            hasValue = true;
                            sendValue = value;
                            !(throttled && !throttled.closed) &&
                                (leading ? send() : startThrottle(value));
                        },
                        () => {
                            isComplete = true;
                            !(trailing && hasValue && throttled && !throttled.closed) &&
                                subscriber.complete();
                        }
                    )
                );
            });
        } // ./src/esm/internal/operators/throttleTime.js
        //# sourceMappingURL=throttle.js.map
        function throttleTime(duration, scheduler = asyncScheduler, config) {
            const duration$ = timer(duration, scheduler);
            return throttle(() => duration$, config);
        } // ./src/esm/internal/operators/timeInterval.js
        //# sourceMappingURL=throttleTime.js.map
        function timeInterval(scheduler = asyncScheduler) {
            return operate((source, subscriber) => {
                let last = scheduler.now();
                source.subscribe(
                    createOperatorSubscriber(subscriber, (value) => {
                        const now = scheduler.now();
                        const interval = now - last;
                        last = now;
                        subscriber.next(new TimeInterval(value, interval));
                    })
                );
            });
        }
        class TimeInterval {
            constructor(value, interval) {
                this.value = value;
                this.interval = interval;
            }
        } // ./src/esm/internal/operators/timeoutWith.js
        //# sourceMappingURL=timeInterval.js.map
        function timeoutWith(due, withObservable, scheduler) {
            let first;
            let each;
            let _with;
            scheduler =
                scheduler !== null && scheduler !== void 0 ? scheduler : async_async;
            if (isValidDate(due)) {
                first = due;
            } else if (typeof due === "number") {
                each = due;
            }
            if (withObservable) {
                _with = () => withObservable;
            } else {
                throw new TypeError("No observable provided to switch to");
            }
            if (first == null && each == null) {
                throw new TypeError("No timeout provided.");
            }
            return timeout({
                first,
                each,
                scheduler,
                with: _with
            });
        } // ./src/esm/internal/operators/timestamp.js
        //# sourceMappingURL=timeoutWith.js.map
        function timestamp(timestampProvider = dateTimestampProvider) {
            return map((value) => ({ value, timestamp: timestampProvider.now() }));
        } // ./src/esm/internal/operators/window.js
        //# sourceMappingURL=timestamp.js.map
        function window_window(windowBoundaries) {
            return operate((source, subscriber) => {
                let windowSubject = new Subject();
                subscriber.next(windowSubject.asObservable());
                const errorHandler = (err) => {
                    windowSubject.error(err);
                    subscriber.error(err);
                };
                source.subscribe(
                    createOperatorSubscriber(
                        subscriber,
                        (value) =>
                            windowSubject === null || windowSubject === void 0
                                ? void 0
                                : windowSubject.next(value),
                        () => {
                            windowSubject.complete();
                            subscriber.complete();
                        },
                        errorHandler
                    )
                );
                innerFrom(windowBoundaries).subscribe(
                    createOperatorSubscriber(
                        subscriber,
                        () => {
                            windowSubject.complete();
                            subscriber.next((windowSubject = new Subject()));
                        },
                        noop,
                        errorHandler
                    )
                );
                return () => {
                    windowSubject === null || windowSubject === void 0
                        ? void 0
                        : windowSubject.unsubscribe();
                    windowSubject = null;
                };
            });
        } // ./src/esm/internal/operators/windowCount.js
        //# sourceMappingURL=window.js.map
        function windowCount(windowSize, startWindowEvery = 0) {
            const startEvery = startWindowEvery > 0 ? startWindowEvery : windowSize;
            return operate((source, subscriber) => {
                let windows = [new Subject()];
                let starts = [];
                let count = 0;
                subscriber.next(windows[0].asObservable());
                source.subscribe(
                    createOperatorSubscriber(
                        subscriber,
                        (value) => {
                            for (const window of windows) {
                                window.next(value);
                            }
                            const c = count - windowSize + 1;
                            if (c >= 0 && c % startEvery === 0) {
                                windows.shift().complete();
                            }
                            if (++count % startEvery === 0) {
                                const window = new Subject();
                                windows.push(window);
                                subscriber.next(window.asObservable());
                            }
                        },
                        () => {
                            while (windows.length > 0) {
                                windows.shift().complete();
                            }
                            subscriber.complete();
                        },
                        (err) => {
                            while (windows.length > 0) {
                                windows.shift().error(err);
                            }
                            subscriber.error(err);
                        },
                        () => {
                            starts = null;
                            windows = null;
                        }
                    )
                );
            });
        } // ./src/esm/internal/operators/windowTime.js
        //# sourceMappingURL=windowCount.js.map
        function windowTime(windowTimeSpan, ...otherArgs) {
            var _a, _b;
            const scheduler =
                (_a = popScheduler(otherArgs)) !== null && _a !== void 0
                    ? _a
                    : asyncScheduler;
            const windowCreationInterval =
                (_b = otherArgs[0]) !== null && _b !== void 0 ? _b : null;
            const maxWindowSize = otherArgs[1] || Infinity;
            return operate((source, subscriber) => {
                let windowRecords = [];
                let restartOnClose = false;
                const closeWindow = (record) => {
                    const { window, subs } = record;
                    window.complete();
                    subs.unsubscribe();
                    arrRemove(windowRecords, record);
                    restartOnClose && startWindow();
                };
                const startWindow = () => {
                    if (windowRecords) {
                        const subs = new Subscription();
                        subscriber.add(subs);
                        const window = new Subject();
                        const record = {
                            window,
                            subs,
                            seen: 0
                        };
                        windowRecords.push(record);
                        subscriber.next(window.asObservable());
                        executeSchedule(
                            subs,
                            scheduler,
                            () => closeWindow(record),
                            windowTimeSpan
                        );
                    }
                };
                if (windowCreationInterval !== null && windowCreationInterval >= 0) {
                    executeSchedule(
                        subscriber,
                        scheduler,
                        startWindow,
                        windowCreationInterval,
                        true
                    );
                } else {
                    restartOnClose = true;
                }
                startWindow();
                const loop = (cb) => windowRecords.slice().forEach(cb);
                const terminate = (cb) => {
                    loop(({ window }) => cb(window));
                    cb(subscriber);
                    subscriber.unsubscribe();
                };
                source.subscribe(
                    createOperatorSubscriber(
                        subscriber,
                        (value) => {
                            loop((record) => {
                                record.window.next(value);
                                maxWindowSize <= ++record.seen && closeWindow(record);
                            });
                        },
                        () => terminate((consumer) => consumer.complete()),
                        (err) => terminate((consumer) => consumer.error(err))
                    )
                );
                return () => {
                    windowRecords = null;
                };
            });
        } // ./src/esm/internal/operators/windowToggle.js
        //# sourceMappingURL=windowTime.js.map
        function windowToggle(openings, closingSelector) {
            return operate((source, subscriber) => {
                const windows = [];
                const handleError = (err) => {
                    while (0 < windows.length) {
                        windows.shift().error(err);
                    }
                    subscriber.error(err);
                };
                innerFrom(openings).subscribe(
                    createOperatorSubscriber(
                        subscriber,
                        (openValue) => {
                            const window = new Subject();
                            windows.push(window);
                            const closingSubscription = new Subscription();
                            const closeWindow = () => {
                                arrRemove(windows, window);
                                window.complete();
                                closingSubscription.unsubscribe();
                            };
                            let closingNotifier;
                            try {
                                closingNotifier = innerFrom(closingSelector(openValue));
                            } catch (err) {
                                handleError(err);
                                return;
                            }
                            subscriber.next(window.asObservable());
                            closingSubscription.add(
                                closingNotifier.subscribe(
                                    createOperatorSubscriber(
                                        subscriber,
                                        closeWindow,
                                        noop,
                                        handleError
                                    )
                                )
                            );
                        },
                        noop
                    )
                );
                source.subscribe(
                    createOperatorSubscriber(
                        subscriber,
                        (value) => {
                            const windowsCopy = windows.slice();
                            for (const window of windowsCopy) {
                                window.next(value);
                            }
                        },
                        () => {
                            while (0 < windows.length) {
                                windows.shift().complete();
                            }
                            subscriber.complete();
                        },
                        handleError,
                        () => {
                            while (0 < windows.length) {
                                windows.shift().unsubscribe();
                            }
                        }
                    )
                );
            });
        } // ./src/esm/internal/operators/windowWhen.js
        //# sourceMappingURL=windowToggle.js.map
        function windowWhen(closingSelector) {
            return operate((source, subscriber) => {
                let window;
                let closingSubscriber;
                const handleError = (err) => {
                    window.error(err);
                    subscriber.error(err);
                };
                const openWindow = () => {
                    closingSubscriber === null || closingSubscriber === void 0
                        ? void 0
                        : closingSubscriber.unsubscribe();
                    window === null || window === void 0 ? void 0 : window.complete();
                    window = new Subject();
                    subscriber.next(window.asObservable());
                    let closingNotifier;
                    try {
                        closingNotifier = innerFrom(closingSelector());
                    } catch (err) {
                        handleError(err);
                        return;
                    }
                    closingNotifier.subscribe(
                        (closingSubscriber = createOperatorSubscriber(
                            subscriber,
                            openWindow,
                            openWindow,
                            handleError
                        ))
                    );
                };
                openWindow();
                source.subscribe(
                    createOperatorSubscriber(
                        subscriber,
                        (value) => window.next(value),
                        () => {
                            window.complete();
                            subscriber.complete();
                        },
                        handleError,
                        () => {
                            closingSubscriber === null || closingSubscriber === void 0
                                ? void 0
                                : closingSubscriber.unsubscribe();
                            window = null;
                        }
                    )
                );
            });
        } // ./src/esm/internal/operators/withLatestFrom.js
        //# sourceMappingURL=windowWhen.js.map
        function withLatestFrom(...inputs) {
            const project = popResultSelector(inputs);
            return operate((source, subscriber) => {
                const len = inputs.length;
                const otherValues = new Array(len);
                let hasValue = inputs.map(() => false);
                let ready = false;
                for (let i = 0; i < len; i++) {
                    innerFrom(inputs[i]).subscribe(
                        createOperatorSubscriber(
                            subscriber,
                            (value) => {
                                otherValues[i] = value;
                                if (!ready && !hasValue[i]) {
                                    hasValue[i] = true;
                                    (ready = hasValue.every(identity)) &&
                                        (hasValue = null);
                                }
                            },
                            noop
                        )
                    );
                }
                source.subscribe(
                    createOperatorSubscriber(subscriber, (value) => {
                        if (ready) {
                            const values = [value, ...otherValues];
                            subscriber.next(project ? project(...values) : values);
                        }
                    })
                );
            });
        } // ./src/esm/internal/operators/zipAll.js
        //# sourceMappingURL=withLatestFrom.js.map
        function zipAll(project) {
            return joinAllInternals(zip, project);
        } // ./src/esm/internal/operators/zip.js
        //# sourceMappingURL=zipAll.js.map
        function zip_zip(...sources) {
            return operate((source, subscriber) => {
                zip(source, ...sources).subscribe(subscriber);
            });
        } // ./src/esm/internal/operators/zipWith.js
        //# sourceMappingURL=zip.js.map
        function zipWith(...otherInputs) {
            return zip_zip(...otherInputs);
        } // ./src/esm/index.js
        //# sourceMappingURL=zipWith.js.map
        //# sourceMappingURL=index.js.map
        /******/ return __webpack_exports__;
        /******/
    })();
});
