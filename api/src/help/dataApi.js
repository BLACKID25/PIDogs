function dataApi(ele) {
    const newobjedogs = {
      id: ele.id,
      name: ele.name,
      height: ele.height.metric,
      weight: ele.weight.metric,
      life_span: ele.life_span,
      image: ele.image.url,
      temperament: ele.temperament ? ele.temperament.split(", ") : [],
      created: false,
    };
    return newobjedogs;
  }
  
  module.exports = dataApi;