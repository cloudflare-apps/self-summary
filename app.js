(function () {
  const CONTAINER_CLASS = "eager-self-summary"

  let element
  let options = INSTALL_OPTIONS

  function updateElement() {
    element = Eager.createElement(options.location, element)
    element.classList.add(CONTAINER_CLASS)

    if (options.email && options.gravatar){
      function get_gravatar(email, size) {
        // MD5 (Message-Digest Algorithm) by WebToolkit
        const md5 = function(s){function L(k,d){return(k<<d)|(k>>>(32-d))}function K(G,k){var I,d,F,H,x;F=(G&2147483648);H=(k&2147483648);I=(G&1073741824);d=(k&1073741824);x=(G&1073741823)+(k&1073741823);if(I&d){return(x^2147483648^F^H)}if(I|d){if(x&1073741824){return(x^3221225472^F^H)}else{return(x^1073741824^F^H)}}else{return(x^F^H)}}function r(d,F,k){return(d&F)|((~d)&k)}function q(d,F,k){return(d&k)|(F&(~k))}function p(d,F,k){return(d^F^k)}function n(d,F,k){return(F^(d|(~k)))}function u(G,F,aa,Z,k,H,I){G=K(G,K(K(r(F,aa,Z),k),I));return K(L(G,H),F)}function f(G,F,aa,Z,k,H,I){G=K(G,K(K(q(F,aa,Z),k),I));return K(L(G,H),F)}function D(G,F,aa,Z,k,H,I){G=K(G,K(K(p(F,aa,Z),k),I));return K(L(G,H),F)}function t(G,F,aa,Z,k,H,I){G=K(G,K(K(n(F,aa,Z),k),I));return K(L(G,H),F)}function e(G){var Z;var F=G.length;var x=F+8;var k=(x-(x%64))/64;var I=(k+1)*16;var aa=Array(I-1);var d=0;var H=0;while(H<F){Z=(H-(H%4))/4;d=(H%4)*8;aa[Z]=(aa[Z]|(G.charCodeAt(H)<<d));H++}Z=(H-(H%4))/4;d=(H%4)*8;aa[Z]=aa[Z]|(128<<d);aa[I-2]=F<<3;aa[I-1]=F>>>29;return aa}function B(x){var k="",F="",G,d;for(d=0;d<=3;d++){G=(x>>>(d*8))&255;F="0"+G.toString(16);k=k+F.substr(F.length-2,2)}return k}function J(k){k=k.replace(/rn/g,"n");var d="";for(var F=0;F<k.length;F++){var x=k.charCodeAt(F);if(x<128){d+=String.fromCharCode(x)}else{if((x>127)&&(x<2048)){d+=String.fromCharCode((x>>6)|192);d+=String.fromCharCode((x&63)|128)}else{d+=String.fromCharCode((x>>12)|224);d+=String.fromCharCode(((x>>6)&63)|128);d+=String.fromCharCode((x&63)|128)}}}return d}var C=Array();var P,h,E,v,g,Y,X,W,V;var S=7,Q=12,N=17,M=22;var A=5,z=9,y=14,w=20;var o=4,m=11,l=16,j=23;var U=6,T=10,R=15,O=21;s=J(s);C=e(s);Y=1732584193;X=4023233417;W=2562383102;V=271733878;for(P=0;P<C.length;P+=16){h=Y;E=X;v=W;g=V;Y=u(Y,X,W,V,C[P+0],S,3614090360);V=u(V,Y,X,W,C[P+1],Q,3905402710);W=u(W,V,Y,X,C[P+2],N,606105819);X=u(X,W,V,Y,C[P+3],M,3250441966);Y=u(Y,X,W,V,C[P+4],S,4118548399);V=u(V,Y,X,W,C[P+5],Q,1200080426);W=u(W,V,Y,X,C[P+6],N,2821735955);X=u(X,W,V,Y,C[P+7],M,4249261313);Y=u(Y,X,W,V,C[P+8],S,1770035416);V=u(V,Y,X,W,C[P+9],Q,2336552879);W=u(W,V,Y,X,C[P+10],N,4294925233);X=u(X,W,V,Y,C[P+11],M,2304563134);Y=u(Y,X,W,V,C[P+12],S,1804603682);V=u(V,Y,X,W,C[P+13],Q,4254626195);W=u(W,V,Y,X,C[P+14],N,2792965006);X=u(X,W,V,Y,C[P+15],M,1236535329);Y=f(Y,X,W,V,C[P+1],A,4129170786);V=f(V,Y,X,W,C[P+6],z,3225465664);W=f(W,V,Y,X,C[P+11],y,643717713);X=f(X,W,V,Y,C[P+0],w,3921069994);Y=f(Y,X,W,V,C[P+5],A,3593408605);V=f(V,Y,X,W,C[P+10],z,38016083);W=f(W,V,Y,X,C[P+15],y,3634488961);X=f(X,W,V,Y,C[P+4],w,3889429448);Y=f(Y,X,W,V,C[P+9],A,568446438);V=f(V,Y,X,W,C[P+14],z,3275163606);W=f(W,V,Y,X,C[P+3],y,4107603335);X=f(X,W,V,Y,C[P+8],w,1163531501);Y=f(Y,X,W,V,C[P+13],A,2850285829);V=f(V,Y,X,W,C[P+2],z,4243563512);W=f(W,V,Y,X,C[P+7],y,1735328473);X=f(X,W,V,Y,C[P+12],w,2368359562);Y=D(Y,X,W,V,C[P+5],o,4294588738);V=D(V,Y,X,W,C[P+8],m,2272392833);W=D(W,V,Y,X,C[P+11],l,1839030562);X=D(X,W,V,Y,C[P+14],j,4259657740);Y=D(Y,X,W,V,C[P+1],o,2763975236);V=D(V,Y,X,W,C[P+4],m,1272893353);W=D(W,V,Y,X,C[P+7],l,4139469664);X=D(X,W,V,Y,C[P+10],j,3200236656);Y=D(Y,X,W,V,C[P+13],o,681279174);V=D(V,Y,X,W,C[P+0],m,3936430074);W=D(W,V,Y,X,C[P+3],l,3572445317);X=D(X,W,V,Y,C[P+6],j,76029189);Y=D(Y,X,W,V,C[P+9],o,3654602809);V=D(V,Y,X,W,C[P+12],m,3873151461);W=D(W,V,Y,X,C[P+15],l,530742520);X=D(X,W,V,Y,C[P+2],j,3299628645);Y=t(Y,X,W,V,C[P+0],U,4096336452);V=t(V,Y,X,W,C[P+7],T,1126891415);W=t(W,V,Y,X,C[P+14],R,2878612391);X=t(X,W,V,Y,C[P+5],O,4237533241);Y=t(Y,X,W,V,C[P+12],U,1700485571);V=t(V,Y,X,W,C[P+3],T,2399980690);W=t(W,V,Y,X,C[P+10],R,4293915773);X=t(X,W,V,Y,C[P+1],O,2240044497);Y=t(Y,X,W,V,C[P+8],U,1873313359);V=t(V,Y,X,W,C[P+15],T,4264355552);W=t(W,V,Y,X,C[P+6],R,2734768916);X=t(X,W,V,Y,C[P+13],O,1309151649);Y=t(Y,X,W,V,C[P+4],U,4149444226);V=t(V,Y,X,W,C[P+11],T,3174756917);W=t(W,V,Y,X,C[P+2],R,718787259);X=t(X,W,V,Y,C[P+9],O,3951481745);Y=K(Y,h);X=K(X,E);W=K(W,v);V=K(V,g)}var i=B(Y)+B(X)+B(W)+B(V);return i.toLowerCase()}

        var size = size || 80

        const jpg = ".jpg?s="

        const emailLower = options.email.toLowerCase()

        const emailResult = md5(emailLower)

        const gravatarURL = `http://www.gravatar.com/avatar/${emailResult}${jpg}${size}`

        element.innerHTML += `<img class="avatar" src=${gravatarURL}>`
      }

      get_gravatar()
    } 
    else {
      element.innerHTML += `<img class="avatar" src=${options.image}>`
    }
    element.innerHTML += `
    <h2>${options.messageTitle}</h2>
    <eager-message>${options.message}</eager-message><br><br>`
    if (options.emailToggle){
      element.innerHTML += `<a href="${options.email}"><img alt="Email Link" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAACs0lEQVRYR+2YvY+NQRSHnxVEIValoRQFYW3hq5AIf4BCtJQ6oSERQchGkCDRr9WrVIQQoSA+QkQkrMYKEY2PQnztym8zczNe7zvn3OsdWcmd5hZ35pxnfmfmnPPOADNsDMwwHvpAVkT6CnWr0DCwB9gMLIZiZ2wKeANcA84AjyNoDJl+DwGHC0I0iTMZ/I4AUxFIIEcsOQv/fxAYEZDC9KBlZb4Cd4B1wDznRqTUsIAuADuci7zTNgSgNcBVYNC5cExAE8AS5wLvtFk6D2FyN1ATApJUbeejqj0v1KQWxp14d++ZV7dBF9S/BNJGTKhegaTqPeAWcB94HhLdB0A3LKd6FqpboPfAWeA88NYTu4Y5jVDdAI0Ce4FPfwGSLq2F8gLtA061BJKaWRvCPjetZdYtOw4cKAATTd4FBDY9LIV0YJV1fxQCku2bwBwv0BbgeiGY9cAVYEFqP6fQOLCsUOKshbFCpuutW9X2aISxgLYDFzM0quDbQne5InSYC8N5aKqNWRgLaDnwrAZIznYBJ6rxT+bWAZkwFpB2+7EGSGE8bcSxCuSCsYBmAz8rjtU3vQQ6iawBLO2H3DAWUGo0+lXfe8xxyjcCt0MOu5wJ7R+mcte+LmQ3gE0OoO/AI2B1mvQc67KZWulcLUY63gGLPIZ7nZNTqFpQdaa086IjByR1OkUvfDmoASs6rOKqnkUFVkM1py4NtApoAV0CtgaPqsjfWvVeY8zzGaSHB90ujc/A/IJQ059Br0MdavKjBl7X9wvwAlhaEOiVgMaAnYaTc8Bu4LfurgDYqICGgIeAMnNuPAFWFoCIJlWmhmIR9JaEgjzsB06mD1Zq5I86lGobSsrIt75qOg9W0cmq0CWql9aTnhXGXuH0wKHLpCc9tTJPo6G2Xz16Beys6wNZEvYV+u8U+gXGFoltyLIqlAAAAABJRU5ErkJggg=="></a><br>`;
    }
    if (options.twitterToggle){
      element.innerHTML += `<a href="${options.twitter}"><img alt="Twitter Logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAC3ElEQVRYR+3YTeiUVRTH8Y9aIBlEESgZUemmoNKF4k4pIiIiMITa2MJekBYVgoFYSvmHsKhFFKTlC0TUykUvG6WVCwkripJa1CKjQKMEMQnyhR/cgcFmnvs80390hP/dzGLOOfd7f+fc89x7Z5mwMWvCeMwA1TIyo1BXhZbiWdyNhYytxs7hNxzAG/imB9pLWX5fxJYxQgwT52yZdwrnekAB2VqTc8z/b8ZUgJKmLy+BMheuL0otDdBerB3z6tuG3xOgo7ixrceY7Y4GKFJNSj86G5BswYkZlx1Q1OuSzpPZuviw1OZ1uB8v4eaShkO4CTcMSktNoXV4Cstb5PQPrMSRAbbXIrH242ocHBavBhTnK7EPqypQq4tdk9kd2I5TeLirQqdxVXEKVGTfiNkDAqV1JCXZsU0jca4vCt3aFSj2qYG/+hyzwm148ILa+gwPtEjrbfgUt4yassfx3gDnBFyDe3BX+Vrf1wJoA15rsmuqoX+RQk1BJyVN4wrEvjZeKKkfatcEdBiPYRE+maYGugNPjKrQP1iAE7Vld/j/CywbFSh+2aLPd5iwyTS96Djm/B+g+D6JndMAlQ1SjVNrjOFIP/oIr+DHEcHSu77GnTX/NkB/lqaX79So41F80Ma5DVDivF92XK0TD5oznfk7zJ9OoMTK1n8GP7cJXGxSwB+XL34rt7YK9QfbjadLbTVNkrp5Bynm1qMLUHrIm6UWaqmbh3fxSGuSYtgE9Dn24Hd8i2MtgifevXgLi1vY/8ekptBPeLucAHP1HTauwUNYjxWjgPR8akD9sX8oX/Vf8Tfmlk/L7VhS68BtISfyGpQV56VjEsYvUSiFm2PGJIxdAcqJ76shZ+WLCXkmLL07V55CXr6Ysw+YK8ec7f0PVpvK8XLQrWKcrFEmc7/a/2DVmzDHg+fK4T2FPi64dPpspjzpvY7v+/vQOFffOXaXe3vn4KM4zADVVJtRqKbQeUMriG35qADAAAAAAElFTkSuQmCC"></a><br>`;
    }
    if (options.facebookToggle){
      element.innerHTML += `<a href="${options.facebook}"><img alt="Facebook Logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAACBklEQVRYR+3YzatNURjH8c81pUyMvGRgRKEbMwN5+wMkU0ZmBqS8JUQ3b8VAZtI1kpmJiQxEjLxEETJyJWWiTAy4V89pH+12+9y97j171dHdZ3Jqr2et5/v8nmet1nrGjNhvbMR4dEBNGekUmqtC4ziE7VhBthqbwVc8xDW87oP2Uxb/p3EmI8QgcaYLvxOY6QMFyNkmOTOPn8JEAEWaXmRU5hve4Dt+V4LagyXFt1BqPIBuY1+G6J/jCJ5EKgas/wlrSmOTATSFlS0DPcVO/GpYtwo0FUAhVZvnUaixFh8SgqwCTQfIIDkT1qs1eYytiZOrQD1l2ga6iBMDgFZjVWnsLpaXbXMAHcSNGqBQ7VGTcjmADuBmjeOjuDRKQMdxYcECXcfLIvpn+FijxHpsqny/gmU5ino37jWlozIe9fsTi0cFaCl+VINoa5fNR6F1eDtKQLvwIBfQHbwrFr+PVzX1tAXbSt83YG8uoPK6gw7GhX0OdQrN5czraqhJrU6hhadQ28+gYWqo9wz6UnQ6mlKROj4M0OcAmsT+VG8JdsMA3QqgjcX1c1GCsxST+QL9CZb+EzpaIedTvCXYxLv+fY1dBL55lvnHcLncsDqJc2hLqQT2nkkoE77jwv+vYdWfHJemw9hRFHouuNjZsZmipXe1fJVts+uRqsisdh1Qk4ydQv+dQn8BgNKDbTHGpN4AAAAASUVORK5CYII="></a><br>`;
    }
    if (options.linkedInToggle){
      element.innerHTML += `<a href="${options.linkedIn}"><img alt="LinkedIn Logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAACi0lEQVRYR+2YzUtWQRSHHyOozKwWgpVE4TYKN7VOkXatg/xoF0RRRlBIlBQiGGpkBG3Kyv/AbZYtggqKAl0FBSotIrLsO0njJ3PhMsy8117uNO/ins2FmXvnPPM7c87cmSoqzKoqjIcCKCsihUL/qlATcApoBrZBsDW2BLwD7gNDwKsENAmZnheAiwEhfOIsGr+9wFICJJCeLDkD958HegWkMD2PoIw9PynVJKA7QEfg2a90+BEBzQANK/0i8HszApJUrnrUD9wEPpqwXgN2BQZaFIhS0LbrwAmrcSvwGqgOCeUDUh166HCsutESA+ggMOZw/ATYFwPoEdAKLKScS7XxkDAa2xcy9ak23QbmjCpHgTUxgUL7do7vU+iLSff0R3p3u2lQZk47RqwzWahS8gB4CfwElKEK+Y6sWfqABoAz1sdrgR+m7SuwwTH4KNBoKr9KRNpWAYeAG8BGH1i5QAJz1aPTpph+K6GE9s7HwDrXO+UCKQyuAaWCwpVl54C+PIF+AQqhz7RWtgCTgNajbZuB98Bqu6NchX57SoDG07ZzzDj6BBwAnjmgngJ78wLyKdQO3LWcTAD7HUD3gLa8gHxrSIX0iOVE8Fpv9iY+DBzPC8iXZUr7ww41BKRJpO0qcLIAMgoEV+g7sN4RmmghUyWuqSSgUntZlEWt6ltbSQrNe3bsXNaQ6xiU9fvxGdgUQKHlY9CsuelIjy+HHyyH2sl3mjZV3TcOoHpP9r11/AXoZ84O+7SARoDOEjv3/+y6JaA9wAtACsS0P2JJjtC6CrkckwY4C/SnL6y6gUsRlJIy8n0lfWGViLMb6DLHZV3phQqjMlvJpKP5IDCVABS3sFnrtFCoUChLgaz+v2IZuW3/XQd/AAAAAElFTkSuQmCC"></a><br>`;
    }
    
    // const closeButton = document.createElement("eager-closeButton")

    // element.appendChild(closeButton)
    // closeButton.addEventListener("click", hide)

    // function hide() {
    //   // document.removeChild(element)
    // }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", updateElement)
  }
  else {
    updateElement()
  }

  INSTALL_SCOPE = {
    setOptions(nextOptions) {
      options = nextOptions

      updateElement()
    }
  }
}())
