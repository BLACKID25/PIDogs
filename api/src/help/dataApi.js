function dataApi(data) {
    const newobjedogs = {
      id: data.id,
      name: data.name,
      height: data.height.metric,
      weight: data.weight.metric,
      life_span: data.life_span,
      image: data.image.url,
      temperament: data.temperament ? data.temperament.split(", ") : [],
      created: false,
    };
    return newobjedogs;
  }
  
  module.exports = dataApi;