export const peopleSources = [ //people
  { id: '1', name: "Luke Skywalker", attribute: 'people', src: 'imagenes/LukeSkywalker.jpeg'},  
  { id: '10', name: "Obi-Wan Kenobi", attribute: 'people', src: 'imagenes/ObiWanKenobi.jpg' },
  { id: '11', name: "Anakin Skywalker", attribute: 'people', src: 'imagenes/AnakinSkywalker.png' }
];

export const planetSources = [ //planets
  { id: '1', name: "Tatooine", attribute: 'planets', src:'imagenes/Tatooine.jpg'},
  { id: '5', name: "Dagobah", attribute: 'planets', src:'imagenes/Dagobah.jpg'},
  { id: '17', name: "Felucia", attribute: 'planets', src: 'imagenes/Felucia.jpg'}
];

// Combine both arrays
export const imageSources = [...peopleSources, ...planetSources];