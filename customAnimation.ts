namespace myImages {

    helpers._registerFactory("image", function (name: string) {
        switch (helpers.stringTrim(name)) {
            case "image1":
            case "myImage": return img`
. . . . . c c c c c c c . . . . 
. . . . c 6 7 7 7 7 7 6 c . . . 
. . . c 7 c 6 6 6 6 c 7 6 c . . 
. . c 6 7 6 f 6 6 f 6 7 7 c . . 
. . c 7 7 7 7 7 7 7 7 7 7 c . . 
. . f 7 8 1 f f 1 6 7 7 7 f . . 
. . f 6 f 1 f f 1 f 7 7 7 f . . 
. . . f f 2 2 2 2 f 7 7 6 f . . 
. . c c f 2 2 2 2 7 7 6 f c . . 
. c 7 7 7 7 7 7 7 7 c c 7 7 c . 
c 7 1 1 1 7 7 7 7 f c 6 7 7 7 c 
f 1 1 1 1 1 7 6 f c c 6 6 6 c c 
f 1 1 1 1 1 1 6 6 c 6 6 6 c . . 
f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
. f 6 1 1 1 1 1 6 6 6 6 c . . . 
. . f f c c c c c c c c . . . . 
`;
            case "image2":
            case "myImage0": return img`
. . . . c c c c c c . . . . . . 
. . . c 6 7 7 7 7 6 c . . . . . 
. . c 7 7 7 7 7 7 7 7 c . . . . 
. c 6 7 7 7 7 7 7 7 7 6 c . . . 
. c 7 c 6 6 6 6 c 7 7 7 c . . . 
. f 7 6 f 6 6 f 6 7 7 7 f . . . 
. f 7 7 7 7 7 7 7 7 7 7 f . . . 
. . f 7 7 7 7 6 c 7 7 6 f c . . 
. . . f c c c c 7 7 6 f 7 7 c . 
. . c 7 2 7 7 7 6 c f 7 7 7 7 c 
. c 7 7 2 7 7 c f c 6 7 7 6 c c 
c 1 1 1 1 7 6 f c c 6 6 6 c . . 
f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
. f 6 1 1 1 1 1 1 6 6 6 f . . . 
. . c c c c c c c c c f . . . . 
`;
        }
        return null;
    })

    helpers._registerFactory("animation", function (name: string) {
        switch (helpers.stringTrim(name)) {
            case "snakeSummon":
            case "anim1": return [img`
.........ccccccc........
........c6777776c.......
.......c7c6666c76c......
......c676f66f677c......
......c7777777777c......
......f781ff16777f......
......f6f1ff1f777f......
.......ff2222f776f......
......ccf2222776fc......
.....c77777777cc77c.....
....c71117777fc6777c....
....f1111176fcc666cc....
....f11111166c666c......
....f611111666666c......
....9f6111116666c.......
.....9ffcccccccc........
`, img`
........ccccccc.........
.......c6777776c........
......c7c6666c76c.......
.....c676f66f677c.......
.....c7777777777c.......
.....f7877776777f.......
.....f6f7777f777f.......
......ff7777f776f.......
.....ccf7777776c77c.....
.....c77777777c6777c....
....c71117777fc666cc....
....f1111176fcc66c......
....f11111166c666c......
...9f61111166666c.......
....9f61111166cc........
.....9ffcccccc99........
`, img`
........cccccc..........
.......c677776c.........
......c77777777c........
.....c6777777776c.......
.....c7c6666c777c.......
.....f76f66f6777f.......
.....f7777777777f.......
......f77776c776fc......
.......fcccc776f77c.....
......c727776cf7777c....
.....c77277cfc6776cc....
....c111176fcc666c......
....f1111166c6666f......
....f61111166666cf......
...99f6111111666f9......
....99cccccccccf99......
`, img`
........cccccc..........
.......c677776c.........
......c77777777c........
.....c6777777776c.......
.....c7f6666f777c.......
.....f7ff66ff777f.......
.....f7777777777f.......
......f77776c776fc......
.......fcccc776f77c.....
......c727776cf7777c....
.....c77277cfc6776cc....
....c111176fcc666c......
....f1111166c6666f......
...9f61111166666cf9.....
...99f6111111666f99.....
....99cccccccccf99......
`, img`
........cccccc..........
.......c677776c.........
......c77777777c........
.....c6777777776c.......
.....c7f6666f777c.......
.....f7f9669f777f.......
.....f7777777777f.......
......f77776c776fc......
.......fcccc776f77c.....
......c727776cf7777c....
.....c77277cfc6776cc....
....c111176fcc666c......
...9f1111166c6666f9.....
...9f61111166666cf9.....
...99f6111111666f99.....
....99cccccccccf99......
`, img`
........cccccc..........
.......c677776c.........
......c77777777c........
.....c6777777776c.......
.....c7f6666f777c.......
.....f7996699777f.......
.....f7777777777f.......
......f77776c776fc......
.......fcccc776f77c.....
......c827776cf7777c....
.....c77287cfc6776cc....
...9c111176fcc666c9.....
...9f1111166c6666f9.....
...9f61111166666cf9.....
...99f6111111666f99.....
....99cccccccccf99......
`, img`
........cccccc..........
.......c677776c.........
......c77777777c........
.....c6777777776c.......
.....c7f6666f777c.......
.....f7996699777f.......
.....f7777777777f.......
......f77776c776fc......
.......fcccc776f77c.....
......c827776cf7777c....
...9.c78288cfc6776cc....
...9c111176fcc666c99....
...9f1111166c6666f9.....
...9f61111166666cf9.....
...99f6111111666f99.....
....99cccccccccf99......
`, img`
........cccccc..........
.......c677776c.........
......c77777777c........
.....c6777777776c.......
.....c7966669777c.......
.....f7996699777f.......
.....f7777777777f.......
......f77776c776fc......
.......fcccc776f77c.....
....9.c827776cf7777c....
...99c88288cfc6776cc9...
...9c111186fcc666c999...
...9f1111166c6666f99....
...9f61111166666cf9.....
...99f6111111666f99.....
....99cccccccccf99......
`, img`
........cccccc..........
.......c677776c.........
......c77777777c........
.....c6777777776c.......
.....c7966669777c.......
.....f7996699777f.......
.....f7777777777f.......
......f77776c776fc......
.......fcccc776f77c.....
..9.99c828876cf7777c9.9.
..999c88288cfc6776cc999.
...9c111186fcc666c999...
...9f1111166c6666f99....
...9f61111166666cf9.....
...99f6111111666f99.....
....99cccccccccf99......
`, img`
........cccccc..........
.......c677776c.........
......c77777777c........
.....c6777777776c.......
.....c7966669777c.......
.....f7996699777f.......
.....f7777777777f.......
......f77776c776fc.....9
.9...9.fcccc876f77c99.99
.99.99c828886cf7777c999.
..999c88288cfc6776cc9...
...9c111186fcc666c999...
...9f1111166c6666f99....
...9f61111166666cf9.....
...99f6111111666f99.....
....99cccccccccf99......
`, img`
........cccccc..........
.......c677776c.........
......c77777777c........
.....c6777777776c.......
.....c7966669777c.......
.....f7996699777f.......
9....f7777777777f......9
9....9f77776c776fc.9...9
99...9.fcccc886f77c99.99
.99.99c898886cf7777c999.
..999c88288cfc6776cc9...
...9c111186fcc666c999...
...9f1111166c6666f99....
...9f61111166666cf9.....
...99f6111111666f99.....
....99cccccccccf99......
`, img`
........cccccc..........
.......c677776c.........
......c77777777c........
.....c6777777776c.......
.....c7966669777c.....9.
.9...f7996699777f.....99
99..9f7777777777f.9....9
9...99f77776c876fc99...9
99...9.fcccc886f77c99.99
.99.99c898886cf7777c999.
..999c88988cfc6776cc9...
...9c111186fcc666c999...
...9f1111166c6666f99....
...9f61111166666cf9.....
...99f6111111666f99.....
....99cccccccccf99......
`, img`
........cccccc..........
.......c677776c.........
......c77777777c........
.....c6777777776c....9..
..9..c7966669777c....99.
.99..f7996699777f.....99
99..9f7777777777f.9....9
9...99f77786c886fc99...9
99...9.fcccc886f77c99.99
.99.99c898886cf7777c999.
..999c88988cfc6776cc9...
...9c111186fcc666c999...
...9f1111166c6666f99....
...9f61111166666cf9.....
...99f6111111666f99.....
....99cccccccccf99......
`, img`
........cccccc..........
.......c677776c.........
......c77777777c........
.....c6777777776c...99..
..99.c7966669777c...999.
.9999f7996699777f..9..99
99..9f7777777877f.99...9
9...99f77886c886fc99...9
99...9.fcccc886f77c99.99
.99.99c898886cf7777c999.
..999c88988cfc6776cc9...
...9c111186fcc666c999...
...9f1111166c6666f99....
...9f61111166666cf9.....
...99f6111111666f99.....
....99cccccccccf99......
`, img`
........cccccc..........
.......c677776c.........
......c77777777c........
.....c6777777776c.......
.....c7966669777c...999.
.9999f7996699777f..9..99
99..9f7777777888f.99...9
9...99f78886c886fc99...9
99...9.fcccc886f77c99.99
.99.99c898886cf7777c999.
..999c88988cfc6776cc9...
...9c111186fcc666c999...
...9f1111166c6666f99....
...9f61111166666cf9.....
...99f6111111666f99.....
....99cccccccccf99......
`, img`
........cccccc..........
.......c677776c.........
......c77777777c........
.....c6777777776c.......
.....c7966669777c...999.
.....f7996699778f..9..99
.9999f7787777888f.99...9
99..99f78886c886fc99...9
9....9.fcccc886f77c99.99
99..99c898886cf7777c999.
.9999c88988cfc6776cc9...
...9c111186fcc666c999...
...9f1111166c6666f99....
...9f61111166666cf9.....
...99f6111111666f99.....
....99cccccccccf99......
`, img`
........cccccc..........
.......c677776c.........
......c77777777c........
.....c6777777776c.......
.....c7966669778c.......
.....f7996699788f...99..
.....f7787777888f..99999
.99999f88886c886fc99...9
99...9.fcccc886f77c9..99
99..99c898886cf7777c999.
.9999c88988cfc6876cc9...
...9c111186fcc666c999...
...9f1111166c6666f99....
...9f61111166666cf9.....
...99f6111111666f99.....
....99cccccccccf99......
`, img`
........cccccc..........
.......c677776c.........
......c77777777c........
.....c6777777776c.......
.....c7966669778c.......
.....f7996699788f.......
.....f8887777888f.....99
......f88886c886fc.9..99
999999.fcccc886f77c99999
999999c898886cf7777c999.
.9999c88988cfc6876cc9...
...9c111186fcc666c999...
...9f1111166c6666f99....
...9f61111166666cf9.....
...99f6111111666f99.....
....99cccccccccf99......
`, img`
........cccccc..........
.......c677776c.........
......c77777777c........
.....c6787777786c.......
.....c7966669788c.......
.....f8996699788f.......
.....f8887777888f.......
......f88886c886fc....99
.......fcccc886f77c9..99
......c898886cf7877c999.
99999c88988cfc6886cc9...
.999c111186fcc666c999...
...9f1111166c6666f99....
...9f61111166666cf9.....
...99f6111111666f99.....
....99cccccccccf99......
`, img`
........cccccc..........
.......c677776c.........
......c77777777c........
.....c6787777886c.......
.....c8966669788c.......
.....f8996699788f.......
.....f8887777888f.......
......f88886c886fc......
.......fcccc886f77c.....
......c898886cf7887c..99
.....c88988cfc6886cc999.
9999c111186fcc666c999...
.999f1111166c6666f99....
...9f61111166666cf9.....
...99f6111111666f99.....
....99cccccccccf99......
`, img`
........cccccc..........
.......c677776c.........
......c87777778c........
.....c6887777886c.......
.....c8966669788c.......
.....f8996699788f.......
.....f8887788888f.......
......f88886c886fc......
.......fcccc886f77c.....
......c898886cf7887c....
.....c88988cfc6886cc..99
....c111186fcc666c..999.
9999f1111166c6666f999...
.999f61111166666cf99....
...99f6111111666f99.....
....99cccccccccf99......
`, img`
........cccccc..........
.......c677776c.........
......c88877788c........
.....c6887777886c.......
.....c8966669788c.......
.....f8996699888f.......
.....f8888788888f.......
......f88886c886fc......
.......fcccc886f88c.....
......c898886cf7887c....
.....c88988cfc6886cc....
....c111186fcc666c....99
....f1111166c6666f..999.
9999f61111166666cf999...
.9999f6111111666f.99....
...999cccccccccf999.....
`, img`
........cccccc..........
.......c677776c.........
......c88877788c........
.....c6887788886c.......
.....c8966669888c.......
.....f8996699888f.......
.....f8888788888f.......
......f88886c886fc......
.......fcccc886f88c.....
......c898886cf7887c....
.....c88988cfc6886cc....
....c111186fcc666c......
....f1111166c6666f....99
....f61111166666cf..999.
99999f6111111666f.999...
.99999cccccccccf9999....
`, img`
........cccccc..........
.......c677776c.........
......c88877788c........
.....c6887888886c.......
.....c8966669888c.......
.....f8996699888f.......
.....f8888888888f.......
......f88886c886fc......
.......fcccc886f88c.....
......c898886cf8888c....
.....c88988cfc6886cc....
....c111186fcc666c......
....f1111166c6666f......
....f61111166666cf....99
.9999f6111111666f...999.
999999cccccccccf99999...
`, img`
........cccccc..........
.......c687776c.........
......c88887788c........
.....c6888888886c.......
.....c8966669888c.......
.....f8996699888f.......
.....f8888888888f.......
......f88886c886fc......
.......fcccc886f88c.....
......c898886cf8888c....
.....c88988cfc6886cc....
....c111186fcc666c......
....f1111166c6666f......
....f61111166666cf......
.....f6111111666f....999
.99999cccccccccf9999999.
`, img`
........cccccc..........
.......c688776c.........
......c88887788c........
.....c6888888886c.......
.....c8966669888c.......
.....f8996699888f.......
.....f8888888888f.......
......f88886c886fc......
.......fcccc886f88c.....
......c898886cf8888c....
.....c88988cfc6886cc....
....c111186fcc666c......
....f1111166c6666f......
....f61111166666cf......
.....f6111111666f.......
9999..cccccccccf...99999
`, img`
........cccccc..........
.......c688876c.........
......c88887788c........
.....c6888888886c.......
.....c8966669888c.......
.....f8996699888f.......
.....f8888888888f.......
......f88886c886fc......
.......fcccc886f88c.....
......c898886cf8888c....
.....c88988cfc6886cc....
....c111186fcc666c......
....f1111166c6666f......
....f61111166666cf......
.....f6111111666f.......
......cccccccccf........
`, img`
........cccccc..........
.......c688876c.........
......c88888788c........
.....c6888888886c.......
.....c8966669888c.......
.....f8996699888f.......
.....f8888888888f.......
......f88886c886fc......
.......fcccc886f88c.....
......c898886cf8888c....
.....c88988cfc6886cc....
....c111186fcc666c......
....f1111166c6666f......
....f61111166666cf......
.....f6111111666f.......
......cccccccccf........
`, img`
........cccccc..........
.......c688886c.........
......c88888788c........
.....c6888888886c.......
.....c8966669888c.......
.....f8996699888f.......
.....f8888888888f.......
......f88886c886fc......
.......fcccc886f88c.....
......c898886cf8888c....
.....c88988cfc6886cc....
....c111186fcc666c......
....f1111166c6666f......
....f61111166666cf......
.....f6111111666f.......
......cccccccccf........
`, img`
........cccccc..........
.......c688886c.........
......c88888888c........
.....c6888888886c.......
.....c8966669888c.......
.....f8996699888f.......
.....f8888888888f.......
......f88886c886fc......
.......fcccc886f88c.....
......c898886cf8888c....
.....c88988cfc6886cc....
....c111186fcc666c......
....f1111166c6666f......
....f61111166666cf......
.....f6111111666f.......
......cccccccccf........
`];
        }
        return null;
    })

    helpers._registerFactory("song", function (name: string) {
        switch (helpers.stringTrim(name)) {

        }
        return null;
    })

}
// Auto-generated code. Do not edit.
