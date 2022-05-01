const Questions = [
    {
        question: 'question',
        type_poste: 'type',
        reponses: [
            'rep1',
            'rep2',
            'rep3'
        ],

        type_rep: "qcm",
        hasfeedback: true
    },
    //

    {
        question: 'votre startup est elle existante ?',
        type_poste: 'fondateur',
        reponses: [
            'oui',
            'non'
        ],
        type_rep: "qcm",
        hasfeedback: false
    },
    {
        question: 'Quel est votre élément différenciant face à votre concurrence ?',
        type_poste: 'entrepreneur',
        reponses: [
            'a',
            'b',
            'c'
        ],
        type_rep: "multiple",
        hasfeedback: false
    },
    {
        question: 'Avez-vous un ou des associés ?',
        type_poste: 'fondateur',
        reponses: [
            '1',
            'plus que 1',  
        ],

        type_rep: "qcm",
        hasfeedback: false
    },
    
    //Qu’est-ce qui vous pousse à entreprendre ? 
    /*   développer une idée innovante,
       être son propre patron, 
       pour donner du sens à son activité,
        être indépendant,
         faire de l’argent */
]

module.exports = {
    Questions
}