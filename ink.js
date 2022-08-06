function ink(r, g, b) {

  let f = false;
  let brushsize = sw;

  let spring = 1.1;
  let friction = 0.95;
  let v = 0.5;
  let newr = 0;
  let vx = 0;
  let vy = 0;
  //let nx, ny;
  let splitNum = 50;
  let diff = floor(sw / random(2,5));

  if (start) {
    mX = pmouseX;
    mY = pmouseY;

    if(!f) {
      f = true;
      px = pmouseX;
      py = pmouseY;


    }
    vx += ( mouseX - px) * spring;
    vy += ( mouseY - py ) * spring;
    vx *= friction;
    vy *= friction;
    //print(vx);

    v += sqrt( vx*vx + vy*vy ) - v;
    v *= 1;

    oldR = newr;
    newr = brushsize - v;

    for( let i = 0; i < splitNum; ++i ) {
      oldX = px;
      oldY = py;
      px += vx / splitNum;
      py += vy / splitNum;
      oldR += ( newr - oldR ) / splitNum;
      if(oldR < 1) { oldR = 1; }
      strokeWeight( oldR+diff );  // AMEND: oldR -> oldR+diff
      line( px, py, oldX, oldY );
      strokeWeight( oldR );  // ADD
      stroke(r, g, b);
      line( px+diff*1.5, py+diff*2, oldX+diff*2, oldY+diff*2 );  // ADD
      line( px-diff, py-diff, oldX-diff, oldY-diff );  // ADD
    }

  } else if(f) {
    vx = vy = 0;
    f = false;
  }
}
