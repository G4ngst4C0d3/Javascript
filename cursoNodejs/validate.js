import Joi from 'joi';

export const modeloTime = Joi.object({
    id: Joi.number().max(3).required,
    nome: Join.string().min(4).required,
    divisao: Joi.number().length(2).required,
    estadio: Join.string().min(4),
    anoFundacao: Joi.number().length(4).required,
    cidade: Join.string().required,
    estado: Joi.string().length(2).required,
    pais: Joi.string().required
});

export const updatetime = Join.object({
    id: Joi.number().max(3),
    nome: Join.string().min(4),
    divisao: Joi.number().length(2),
    estadio: Join.string().min(4),
    anoFundacao: Joi.number().length(4),
    cidade: Join.string(),
    estado: Joi.string().length(2),
    pais: Joi.string()
}).min(1);