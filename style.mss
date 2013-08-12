#mbtalabels {
  text-name: '[STATION]';
  text-face-name: 'Arial Regular';
  text-fill: #fff;
  text-halo-fill: #000;
  text-halo-radius: 0.5;
  text-size: 13;
  text-placement-type: simple;
  text-placements: "N,NE,NW,E,W,S,SE,SW,16,14,12";
  text-dx: 3;
  text-dy: 3;
}

#mbtanode {
  marker-allow-overlap:true;
  marker-width:8;
  [zoom >= 13] { marker-width:7; }
  [zoom >= 16] { marker-width:10; }
  marker-fill:#fff;
  marker-line-color:#fff;
  marker-opacity: 0.65;
}

#mbtaarc {
  line-width:2;
  line-color:#000;
  opacity: 0.65;
  [LINE = 'BLUE'] { line-color:#007cc2; }
  [LINE = 'GREEN'] { line-color:#009d67;}
  [LINE = 'ORANGE'] { line-color:#f8991b; }
  [LINE = 'RED'] { line-color:#ee3a43; }
  [LINE = 'SILVER'] { line-color:#a9b0b6; }
}

#bostonrodents {
  marker-width:4;
  [zoom = 12] { marker-width:2; }
  [zoom = 13] { marker-width:3; }
  [zoom >= 16] { marker-width:5; }
  marker-fill:#b30000;
  marker-line-color:#b30000;
  marker-allow-overlap:true;
  opacity: 0.85;
}
