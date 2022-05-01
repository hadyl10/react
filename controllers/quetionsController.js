const {Questions} = require('../mocks/questions')


module.exports = {

    getQuestionByOccupations: (req, res) => {


      

     res.status(200).json(Questions.filter(q => q.type_poste.includes( req.params.poste)))

    }

}