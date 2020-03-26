const connection = require('../database/connection'); //para a conexao do DB 

    module.exports = {

    async create(request,response){
    
    const {id} = request.body;
    
    const ong = await connection('ongs')
    .where('id',id)
    .select('name')
    .first();
    
    if(!ong){
        return response.status(400).json({error: 'Ops! No ONG found with this ID'});
    }



        return response.json(ong);
    }

}