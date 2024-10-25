function demo() {
    let bs = Number(document.getElementById("base").value);
    let h = Number(document.getElementById("height").value);
    let a = Number(document.getElementById("side").value)
    let b = Number(document.getElementById("side2").value);
    let c = Number(document.getElementById("side3").value);
    let r = Number(document.getElementById("radius").value);
    let l = Number(document.getElementById("length").value);
    let w = Number(document.getElementById("width").value);
    let d = Number(document.getElementById("side4").value);
    let n = Number(document.getElementById("base2").value)

    document.getElementById("triangle-area").innerHTML = (1 / 2) * bs * h;
    document.getElementById("triangle-perimeter").innerHTML = a+b+c;
    
    document.getElementById("area-circle").innerHTML = 3.14 * r * r;
    document.getElementById("perimeter-circle").innerHTML = (2*3.14*r).toFixed(2);
  
    document.getElementById("area-square").innerHTML = l*l;
    document.getElementById("perimeter-square").innerHTML = 4*l;

    document.getElementById("area-rectangle").innerHTML = l*w;
    document.getElementById("perimeter-rectangle").innerHTML = 2*(l+w);
  
    document.getElementById("parallelogram-area").innerHTML = bs*h;
    document.getElementById("parallelogram-perimeter").innerHTML = 2*(l+b);


    document.getElementById("rhombus-area").innerHTML = b*h;
    document.getElementById("rhombus-perimeter").innerHTML = 2*(l+b)
  
    
    document.getElementById("tropezoid-area").innerHTML = ((a+b)/2)*h;
    document.getElementById("tropezoid-perimeter").innerHTML = a+b+c+d;
  
    document.getElementById("pentagon-area").innerHTML = (1/2)*h*n*a;
    document.getElementById("pentagon-perimeter").innerHTML = 5*a;
  }


// function demo(triangle, circles, square, rectangle,parallelogram,rhombus, tropezoid,pentagon) {
//     let bs = Number(document.getElementById("base").value);
//     let h = Number(document.getElementById("height").value);
//     let a = Number(document.getElementById("side").value)
//     let b = Number(document.getElementById("side2").value);
//     let c = Number(document.getElementById("side3").value);
//     let r = Number(document.getElementById("radius").value);
//     let l = Number(document.getElementById("length").value);
//     let w = Number(document.getElementById("width").value);
//     let d = Number(document.getElementById("side4").value);
//     let n = Number(document.getElementById("base2").value)


//     triangle((1 / 2) * bs * h, (a+b+c));
    
//     circles(3.14 * r * r, 2*3.14*r);
  
//     square(l*l, 4*l);
//     rectangle(l*w, 2*(l+w))
  
//     parallelogram(bs*h, 2*(l+b))
    
//     rhombus(b*h, 2*(l+b))
  
//     tropezoid(((a+b)/2)*h,a+b+c+d)
  
//     pentagon((1/2)*h*n*a, 5*a)
  
//   }
  
//   demo(
//     (x,p) => {
//         document.getElementById("triangle-area").innerHTML = x;
//         document.getElementById("triangle-perimeter").innerHTML = p;
//     },
//     (ca,cp) => {
//         document.getElementById("area-circle").innerHTML = ca;
//     document.getElementById("perimeter-circle").innerHTML = cp;
//     },
//     (sa,sp) => {
//         document.getElementById("area-square").innerHTML = sa;
//         document.getElementById("perimeter-square").innerHTML = sp;
//     },
//     (ra,rp) => {
//         document.getElementById("area-rectangle").innerHTML = ra;
//         document.getElementById("perimeter-rectangle").innerHTML = rp;
//     },
//     (pa,pp) => {
//         document.getElementById("parallelogram-area").innerHTML = pa;
//         document.getElementById("parallelogram-perimeter").innerHTML = pp;
//     },
//     (ra,rp) => {
//         document.getElementById("rhombus-area").innerHTML = ra;
//         document.getElementById("rhombus-perimeter").innerHTML = rp;
//     },
//     (ta,tp) => {
//         document.getElementById("tropezoid-area").innerHTML = ta;
//         document.getElementById("tropezoid-perimeter").innerHTML = tp;
//     },
//     (pa,pp) => {
//         document.getElementById("pentagon-area").innerHTML = pa;
//         document.getElementById("pentagon-perimeter").innerHTML = pp;
//     },
  
//   );
  
  // document.querySelector('button').addEventListener('click', demo);
