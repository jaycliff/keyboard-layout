(function createPCKeyboardMapSetup($) {
    "use strict";
    var $document = $(document),
        $window = $(window),
        $_proto = $.fn,
        applier = (function () {
            var list = [];
            return function applier(func, obj, args) {
                var i, length = args.length, result;
                list.length = 0;
                for (i = 0; i < length; i += 1) {
                    list.push(args[i]);
                }
                result = func.apply(obj, list);
                list.length = 0;
                return result;
            };
        }()),
        createKeyboardStructure = (function createKeyboardStructureSetup() {
        var $wrapper, list_of_keys, map_of_keycode_to_key, keyboard_tree = {
            "keyboard-map-wrap": [
                {
                    "section": [
                        {
                            "row": [
                                {
                                    "key-group": [
                                        {
                                            "type": "key",
                                            "data-key": "esc",
                                            "data-which": "27"
                                        }
                                    ]
                                },
                                {
                                    "key-group": [
                                        {
                                            "type": "key",
                                            "data-key": "f1",
                                            "data-which": "112"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "f2",
                                            "data-which": "113"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "f3",
                                            "data-which": "114"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "f4",
                                            "data-which": "115"
                                        }
                                    ]
                                },
                                {
                                    "key-group": [
                                        {
                                            "type": "key",
                                            "data-key": "f5",
                                            "data-which": "116"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "f6",
                                            "data-which": "117"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "f7",
                                            "data-which": "118"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "f8",
                                            "data-which": "119"
                                        }
                                    ]
                                },
                                {
                                    "key-group": [
                                        {
                                            "type": "key",
                                            "data-key": "f9",
                                            "data-which": "120"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "f10",
                                            "data-which": "121"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "f11",
                                            "data-which": "122"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "f12",
                                            "data-which": "123"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "row": [
                                {
                                    "key-group": [
                                        {
                                            "type": "key",
                                            "data-key": "`",
                                            "data-which": "192"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "1",
                                            "data-which": "49"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "2",
                                            "data-which": "50"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "3",
                                            "data-which": "51"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "4",
                                            "data-which": "52"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "5",
                                            "data-which": "53"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "6",
                                            "data-which": "54"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "7",
                                            "data-which": "55"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "8",
                                            "data-which": "56"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "9",
                                            "data-which": "57"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "0",
                                            "data-which": "48"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "-",
                                            "data-which": "189"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "=",
                                            "data-which": "187"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "backspace",
                                            "data-which": "8"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "row": [
                                {
                                    "key-group": [
                                        {
                                            "type": "key",
                                            "data-key": "tab",
                                            "data-which": "9"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "q",
                                            "data-which": "81"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "w",
                                            "data-which": "87"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "e",
                                            "data-which": "69"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "r",
                                            "data-which": "82"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "t",
                                            "data-which": "84"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "y",
                                            "data-which": "89"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "u",
                                            "data-which": "85"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "i",
                                            "data-which": "73"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "o",
                                            "data-which": "79"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "p",
                                            "data-which": "80"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "[",
                                            "data-which": "219"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "]",
                                            "data-which": "221"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "\\",
                                            "data-which": "220"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "row": [
                                {
                                    "key-group": [
                                        {
                                            "type": "key",
                                            "data-key": "caps lock",
                                            "data-which": "20"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "a",
                                            "data-which": "65"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "s",
                                            "data-which": "83"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "d",
                                            "data-which": "68"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "f",
                                            "data-which": "70"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "g",
                                            "data-which": "71"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "h",
                                            "data-which": "72"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "j",
                                            "data-which": "74"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "k",
                                            "data-which": "75"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "l",
                                            "data-which": "76"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": ";",
                                            "data-which": "186"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "'",
                                            "data-which": "222"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "enter",
                                            "data-which": "13"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "row": [
                                {
                                    "key-group": [
                                        {
                                            "type": "key",
                                            "data-key": "left shift",
                                            "data-which": "16"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "z",
                                            "data-which": "90"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "x",
                                            "data-which": "88"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "c",
                                            "data-which": "67"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "v",
                                            "data-which": "86"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "b",
                                            "data-which": "66"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "n",
                                            "data-which": "78"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "m",
                                            "data-which": "77"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": ",",
                                            "data-which": "188"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": ".",
                                            "data-which": "190"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "/",
                                            "data-which": "191"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "right shift",
                                            "data-which": "16"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "row": [
                                {
                                    "key-group": [
                                        {
                                            "type": "key",
                                            "data-key": "left ctrl",
                                            "data-which": "17"
                                        },
                                        {
                                            "type": "dummy",
                                            "data-key": "windows"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "left alt",
                                            "data-which": "18"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "spacebar",
                                            "data-which": "32"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "right alt",
                                            "data-which": "18"
                                        },
                                        {
                                            "type": "dummy",
                                            "data-key": "fn"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "context",
                                            "data-which": "93"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "right ctrl",
                                            "data-which": "17"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "section": [
                        {
                            "row": [
                                {
                                    "key-group": [
                                        {
                                            "type": "dummy",
                                            "data-key": "print screen"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "scroll lock",
                                            "data-which": "145"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "pause",
                                            "data-which": "19"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "row": [
                                {
                                    "key-group": [
                                        {
                                            "type": "key",
                                            "data-key": "insert",
                                            "data-which": "45"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "home",
                                            "data-which": "36"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "page up",
                                            "data-which": "33"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "row": [
                                {
                                    "key-group": [
                                        {
                                            "type": "key",
                                            "data-key": "delete",
                                            "data-which": "46"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "end",
                                            "data-which": "35"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "page down",
                                            "data-which": "34"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "row": [
                                {
                                    "key-group": [
                                        null,
                                        null,
                                        null
                                    ]
                                }
                            ]
                        },
                        {
                            "row": [
                                {
                                    "key-group": [
                                        null,
                                        {
                                            "type": "key",
                                            "data-key": "arrow up",
                                            "data-which": "38"
                                        },
                                        null
                                    ]
                                }
                            ]
                        },
                        {
                            "row": [
                                {
                                    "key-group": [
                                        {
                                            "type": "key",
                                            "data-key": "arrow left",
                                            "data-which": "37"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "arrow down",
                                            "data-which": "40"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "arrow right",
                                            "data-which": "39"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "section": [
                        {
                            "row": [
                                {
                                    "key-group": [
                                        null,
                                        null,
                                        null,
                                        null
                                    ]
                                }
                            ]
                        },
                        {
                            "row": [
                                {
                                    "key-group": [
                                        {
                                            "type": "key",
                                            "data-key": "num lock",
                                            "data-which": "144"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "numpad /",
                                            "data-which": "111"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "numpad *",
                                            "data-which": "106"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "numpad -",
                                            "data-which": "109"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "row": [
                                {
                                    "key-group": [
                                        {
                                            "type": "key",
                                            "data-key": "numpad 7",
                                            "data-which": "103"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "numpad 8",
                                            "data-which": "104"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "numpad 9",
                                            "data-which": "105"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "numpad +",
                                            "data-which": "107"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "row": [
                                {
                                    "key-group": [
                                        {
                                            "type": "key",
                                            "data-key": "numpad 4",
                                            "data-which": "100"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "numpad 5",
                                            "data-which": "101"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "numpad 6",
                                            "data-which": "102"
                                        },
                                        null
                                    ]
                                }
                            ]
                        },
                        {
                            "row": [
                                {
                                    "key-group": [
                                        {
                                            "type": "key",
                                            "data-key": "numpad 1",
                                            "data-which": "97"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "numpad 2",
                                            "data-which": "98"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "numpad 3",
                                            "data-which": "99"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "numpad enter",
                                            "data-which": "13"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "row": [
                                {
                                    "key-group": [
                                        {
                                            "type": "key",
                                            "data-key": "numpad 0",
                                            "data-which": "96"
                                        },
                                        {
                                            "type": "key",
                                            "data-key": "numpad .",
                                            "data-which": "110"
                                        },
                                        null
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        };
        function createPart(item, id, parent) {
            var part, type, key, k, len, value;
            if (item === null) {
                part = document.createElement('span');
                part.className = 'filler';
            } else {
                type = item.type;
                if (typeof type === 'string') {
                    part = document.createElement('span');
                    if (type === 'key') {
                        list_of_keys.push($(part));
                    }
                    for (key in item) {
                        if (item.hasOwnProperty(key)) {
                            value = item[key];
                            if (key === 'type') {
                                part.className = value;
                            } else {
                                if (key === 'data-which') {
                                    if (!map_of_keycode_to_key[value]) {
                                        map_of_keycode_to_key[value] = [];
                                    }
                                    map_of_keycode_to_key[value].push(part);
                                }
                                part.setAttribute(key, value);
                            }
                        }
                    }
                } else {
                    for (key in item) {
                        if (item.hasOwnProperty(key)) {
                            part = document.createElement('span');
                            part.className = key;
                            if (key !== 'keyboard-map-wrap') {
                                part.setAttribute('data-' + key, id);
                            } else {
                                $wrapper = $(part);
                            }
                            if (key === 'row') {
                                part.className += ' clearfix';
                                if (+parent.dataset.section === 2 && (id === 3 || id === 5)) {
                                    part.className += ' shift-up';
                                }
                            }
                            for (k = 0, len = item[key].length; k < len; k += 1) {
                                part.appendChild(createPart(item[key][k], k, part));
                            }
                        }
                    }
                }
            }
            return part;
        }
        return function createKeyboardStructure() {
            var structure;
            $wrapper = null;
            list_of_keys = [];
            map_of_keycode_to_key = {};
            structure = createPart(keyboard_tree);
            return {
                "wrapper": $wrapper,
                "keycode_to_key_map": map_of_keycode_to_key,
                "keys": $(list_of_keys),
                "structure": structure
            };
        };
    }());
    $.createPCKeyboardMap = function createPCKeyboardMap() {
        var keyboard_data = createKeyboardStructure(),
            selected = -1 | 0,
            enable_keyboard_capture = true,
            key_status = new Uint8Array(300),
            select_event = { type: 'select', which: 0 },
            deselect_event = { type: 'deselect', which: 0 },
            $wrapper = keyboard_data.wrapper,
            $keys = keyboard_data.wrapper,
            keycode_to_key_map = keyboard_data.keycode_to_key_map,
            documentEventHandler = function documentEventHandler(event) {
                var k, len, which = event.which, key_list = keycode_to_key_map[which];
                event.preventDefault();
                switch (event.type) {
                case 'keydown':
                    if (key_status[which] === 0) {
                        key_status[which] = 1;
                        //console.log('keydown: ' + which);
                        if (key_list) {
                            for (k = 0, len = key_list.length; k < len; k += 1) {
                                key_list[k].classList.add('activated');
                            }
                        }
                    }
                    break;
                case 'keyup':
                    if (key_status[which] === 1) {
                        key_status[which] = 0;
                        //console.log('keyup: ' + which);
                        if (key_list) {
                            for (k = 0, len = key_list.length; k < len; k += 1) {
                                key_list[k].classList.remove('activated');
                            }
                        }
                    }
                    break;
                }
            },
            windowEventHandler = function windowEventHandler() {
                var key, k, len, key_list;
                for (key in keycode_to_key_map) {
                    if (keycode_to_key_map.hasOwnProperty(key)) {
                        if (key_status[key] === 1) {
                            key_status[key] = 0;
                            key_list = keycode_to_key_map[key];
                            for (k = 0, len = key_list.length; k < len; k += 1) {
                                key_list[k].classList.remove('activated');
                            }
                        }
                    }
                }
            },
            setWrapperDimensions = function setWrapperDimensions() {
                $wrapper.width($wrapper.width()).height($wrapper.height());
            },
            pc_keyboard_map_object = {
                selectByKeycode: function selectByKeycode(keycode, trigger_event) {
                    var which = +keycode, key_list, k, len;
                    if (which !== selected) {
                        pc_keyboard_map_object.deselect();
                        key_list = keycode_to_key_map[which];
                        if (key_list) {
                            selected = which;
                            for (k = 0, len = key_list.length; k < len; k += 1) {
                                key_list[k].classList.add('selected');
                            }
                        }
                        if (trigger_event) {
                            select_event.which = which;
                            $pc_keyboard_map_object.trigger(select_event);
                        }
                        //select_event.which = which;
                        //$pc_keyboard_map_object.trigger(select_event);
                    }
                    return pc_keyboard_map_object;
                },
                deselect: function deselect(trigger_event) {
                    var key_list, k, len;
                    if (selected !== -1) {
                        key_list = keycode_to_key_map[selected];
                        for (k = 0, len = key_list.length; k < len; k += 1) {
                            key_list[k].classList.remove('selected');
                        }
                        if (trigger_event) {
                            deselect_event.which = selected;
                            $pc_keyboard_map_object.trigger(deselect_event);
                        }
                        selected = -1;
                        //$pc_keyboard_map_object.trigger(deselect_event);
                    }
                    return pc_keyboard_map_object;
                },
                toggleKeyboardCapture: function toggleKeyboardCapture(toggle) {
                    if (arguments.length > 0) {
                        if (typeof toggle === "boolean") {
                            if (toggle) {
                                if (!enable_keyboard_capture) {
                                    $document.on('keydown keyup', documentEventHandler);
                                    $window.on('blur', windowEventHandler);
                                    enable_keyboard_capture = true;
                                }
                            } else {
                                if (enable_keyboard_capture) {
                                    $document.off('keydown keyup', documentEventHandler);
                                    $window.trigger('blur').off('blur', windowEventHandler);
                                    enable_keyboard_capture = false;
                                }
                            }
                        }
                        return pc_keyboard_map_object;
                    }
                    return enable_keyboard_capture;
                },
                attachTo: function attachTo(arg) {
                    $wrapper.appendTo(arg);
                    if (enable_keyboard_capture) {
                        $document.on('keydown keyup', documentEventHandler);
                        $window.on('blur', windowEventHandler);
                    }
                    //setTimeout(setWrapperDimensions, 0);
                    return pc_keyboard_map_object;
                },
                switchTo: function switchTo(arg) {
                    var $target;
                    if (arg instanceof $) {
                        $target = arg;
                    } else {
                        $target = $(arg);
                    }
                    $wrapper.data('pckm:swapped-element', $target.replaceWith($wrapper));
                    if (enable_keyboard_capture) {
                        $document.on('keydown keyup', documentEventHandler);
                        $window.on('blur', windowEventHandler);
                    }
                    //setTimeout(setWrapperDimensions, 0);
                    return pc_keyboard_map_object;
                },
                getElement: function getElement() {
                    return $wrapper;
                }
            },
            $pc_keyboard_map_object = $(pc_keyboard_map_object);
        $wrapper.on('mousedown touchstart select', 'span.key', function (event) {
            var which = +this.getAttribute('data-which'), key_list = keycode_to_key_map[which], k, len;
            event.preventDefault();
            if (which !== selected) {
                if (selected !== -1) {
                    key_list = keycode_to_key_map[selected];
                    if (key_list) {
                        for (k = 0, len = key_list.length; k < len; k += 1) {
                            key_list[k].classList.remove('selected');
                        }
                    }
                }
                selected = which;
                key_list = keycode_to_key_map[which];
                if (key_list) {
                    for (k = 0, len = key_list.length; k < len; k += 1) {
                        key_list[k].classList.add('selected');
                    }
                }
                select_event.which = which;
                $pc_keyboard_map_object.trigger(select_event);
            } else {
                key_list = keycode_to_key_map[which];
                if (key_list) {
                    for (k = 0, len = key_list.length; k < len; k += 1) {
                        key_list[k].classList.remove('selected');
                    }
                }
                selected = -1;
                deselect_event.which = which;
                $pc_keyboard_map_object.trigger(deselect_event);
            }
        });
        pc_keyboard_map_object.on = function on() {
            applier($_proto.on, $pc_keyboard_map_object, arguments);
            return pc_keyboard_map_object;
        };
        pc_keyboard_map_object.one = function one() {
            applier($_proto.one, $pc_keyboard_map_object, arguments);
            return pc_keyboard_map_object;
        };
        pc_keyboard_map_object.off = function off() {
            applier($_proto.off, $pc_keyboard_map_object, arguments);
            return pc_keyboard_map_object;
        };
        function trigger() {
            applier($_proto.trigger, $pc_keyboard_map_object, arguments);
            return pc_keyboard_map_object;
        }
        pc_keyboard_map_object.trigger = trigger;
        pc_keyboard_map_object.fire = trigger;
        return pc_keyboard_map_object;
    };
}(typeof jQuery === "function" && jQuery));