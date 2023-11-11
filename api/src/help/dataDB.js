function dataDB(data) {
    const temperament = data.Attitudes?.map((temp) => temp.name);
    return {
      id: data.id,
      name: data.name,
      height: data.height,
      weight: data.weight,
      life_span: data.life_span,
      image: data.image,
      temperament: temperament,
      created: true,
    };
  }
  
  module.exports = dataDB;