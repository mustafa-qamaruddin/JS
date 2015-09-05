/**
 * @file
 * widget.
 * UI / UX
 * 
 * Nilecode™: Rapid Development (http://www.nilecode.com/)
 * Copyright © 2015, Nilecode Software, Inc. (http://www.nilecode.com/)
 *
 * This file is part of Nilecode culture wheel booking widget with best available seats suggestion.
 * ® Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright © 2015 Nilecode Software Foundation, Inc. (http://www.nilecode.com/)
 * @link          http://www.nilecode.com/
 * @package       Nilecode
 * @subpackage    API
 * @version       1.0
 * @since         2015-08-14 Happy day :)
 * @license
 * @author        Mustafa Qamar-ud-Din <m.qamaruddin@nilecode.com>
 * @modified      2015-09-3
 */
var MQ_Widget = MQ_Widget || {};
        /**
         * This much more elaborate example allows us to
         * define both private and public methods of our
         * Singleton object at the cost of being a bit 
         * more complex than all the others.
         * http://robdodson.me/javascript-design-patterns-singleton/
         * http://addyosmani.com/resources/essentialjsdesignpatterns/book/#singletonpatternjavascript
         * @type Function|iframe_L57.iframeAnonym$1
         */

        /**
         *  avoid conflicts with other versions or libraries 
         */
        jQuery.noConflict();
        /**
         *  reserve $ for JQuery
         */
                (function ($) {
                MQ_Widget = (function () {
                // Instance stores a reference to the Singleton
                var instance;
                        var $;
                        function init() {

                        // Singleton

                        // Private methods and variables
                        function privateMethod() {
                        console.log("I am private");
                        }

                        var privateVariable = "Im also private";
                                var jselectors = {
                                buttons: {
                                booking: '#mq-book-now'
                                },
                                        divs: {
                                        overlay: {
                                        id: 'mq-displaybox',
                                                sel: '#mq-displaybox'
                                        }
                                        },
                                        iframes: {
                                        widget: {
                                        id: 'mq-widget-ifrm',
                                                sel: '#mq-widget-ifrm'
                                        }
                                        }
                                };
                                var conf = {
                                css: {
                                file: '/widget/css/iframe.css',
                                        domid: 'iframecss'
                                },
                                        js: {
                                        file: '/widget/js/iframe.js'
                                        },
                                        routes: {
                                        widget: {
                                        view: '/widget/view'
                                        }
                                        },
                                        iframe: {
                                        width: 800,
                                                height: 600
                                        }
                                };
                                return {
                                // Public methods and variables
                                publicMethod: function () {
                                console.log("The public can see me!");
                                        privateMethod();
                                },
                                        engine: function () {
                                        build_dom();
                                                load_css();
                                                attach_events();
                                        },
                                        publicProperty: "I am also public"
                                };
                        }
                ;
                        return {
                        // Get the Singleton instance if one exists
                        // or create one if it doesn't
                        getInstance: function () {
                        if (!instance) {
                        instance = init();
                        }

                        return instance;
                        }

                        };
                })();
                        $(document).ready(MQ_Widget.getInstance().engine());
                }(jQuery);
