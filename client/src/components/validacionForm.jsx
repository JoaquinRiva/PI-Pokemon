const validacionForm = (data) =>{
    const errors = {}
    const regex = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg)$/
    if (!data.name.trim()) {
        errors.name = "El nombre es requerido";
      } else if (data.name.length > 20) {
        errors.name = "El nombre no debe tener más de 20 caracteres";
      } else if (/\d/.test(data.name)) {
        errors.name = "El nombre no debe contener números";
      }

    if(!data.image || !regex.test(data.image)){
        errors.image = "Ponle una imagen a tu pokemon!"
    }

    if(!data.types){
        errors.types = "Tu pokemon tiene que tener al menos 1 tipo!"
    }

    if(data.hp > 900){
        errors.hp = "Tu pokemon no puede tener mas de 900 puntos de HP"
    }

    if(data.attack > 1200){
        errors.attack = "Tu pokemon no puede tener mas de 1200 puntos de ataque"
    }
    
    if(data.defense > 2000){
        errors.defense = "Tu pokemon no puede tener mas de 2000 puntos de defensa "
    }

   
    return errors
}

export default validacionForm