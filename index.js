export default function( fn, timing=200 ) {

    var timer;

    return function(...args) {

        if(!timer) {
            timer = setTimeout( e => { fn.apply( this, args ); timer=false }, timing);
        }

    };

}
