let box = document.querySelector('main .game');
makeborder(box, 10, 3, '#fff');
let box1 = document.querySelector('main .sites .verstka');
makeborder(box1, 10, 3, '#DF633D');
let box2 = document.querySelector('main .sites .script');
makeborder(box2, 10, 3, '#FBFF38');
let box3 = document.querySelector('main .sites .react');
makeborder(box3, 10, 3, '#66B6FF');























function makeborder(box, len, shir, color) {
    box.style.position = 'relative';

    width = box.offsetWidth;
    heigth = box.offsetHeight;

    let border = document.createElement('div');
    border.style.position = 'absolute';
    border.style.top = 0;
    border.style.left = 0;
    border.style.width = '100%';
    border.style.height = '100%';
    border.style.zIndex = -1;

    box.appendChild(border)

    let z = Math.round(width / len);
    if (z % 2 === 0) z++;
    let nlen = width / z;

    for (let i = 0; i < width; i += 2 * nlen) {
        let vdiv = document.createElement('div');
        let ndiv = document.createElement('div');

        vdiv.style.top = '0';
        ndiv.style.bottom = '0';

        vdiv.style.left = i + 'px';
        ndiv.style.left = i + 'px';

        vdiv.style.width = nlen + 'px';
        ndiv.style.width = nlen + 'px';

        vdiv.style.height = shir + 'px';
        ndiv.style.height = shir + 'px';

        vdiv.style.backgroundColor = color;
        ndiv.style.backgroundColor = color;

        vdiv.style.position = 'absolute';
        ndiv.style.position = 'absolute';

        vdiv.style.borderRadius = shir / 2 + 'px';
        ndiv.style.borderRadius = shir / 2 + 'px';

        border.appendChild(vdiv)
        border.appendChild(ndiv)
    }

    let k = Math.round(heigth / len);
    if (k % 2 === 0) k++;
    let nnlen = heigth / k;

    for (let i = 0; i < heigth; i += 2 * nnlen) {
        let ldiv = document.createElement('div');
        let rdiv = document.createElement('div');

        ldiv.style.left = '0';
        rdiv.style.right = '0';

        ldiv.style.top = i + 'px';
        rdiv.style.top = i + 'px';

        ldiv.style.width = shir + 'px';
        rdiv.style.width = shir + 'px';

        ldiv.style.height = nnlen + 'px';
        rdiv.style.height = nnlen + 'px';

        ldiv.style.backgroundColor = color;
        rdiv.style.backgroundColor = color;

        ldiv.style.position = 'absolute';
        rdiv.style.position = 'absolute';

        ldiv.style.borderRadius = shir / 2 + 'px';
        rdiv.style.borderRadius = shir / 2 + 'px';

        border.appendChild(ldiv)
        border.appendChild(rdiv)
    }

}
//11