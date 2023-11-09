function dataDB(ele) {
    const temperament = ele.Attitudes?.map((temp) => temp.name);
    return {
      id: ele.id,
      name: ele.name,
      height: ele.height,
      weight: ele.weight,
      life_span: ele.life_span,
      image: ele.image,
      temperament: temperament,
      created: true,
    };
  }
  
  module.exports = dataDB;