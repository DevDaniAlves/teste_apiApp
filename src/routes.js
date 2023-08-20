const { Router } = require('express');

const { Animal } = require('./database/models/animais');
const { Entrada } = require('./database/models/entrada');
const { Movimentacao } = require('./database/models/movimentacao');
const { Pasto } =  require('./database/models/pastos');
const { User } = require('./database/models/user');
const routes = Router();

// Merendeira
routes.get('/animais', async (req, res) => {
    try {
        const animais = await Animal.findAll();
        return res.status(200).json(animais);
    } catch (error) {
        return res.status(500).json({
            error: `Erro interno! ${error}`
        });
    }
});
routes.delete('/animal/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const animalExiste = await Animal.findByPk(id);
        if (!animalExiste) {
            return res.status(404).json({
                error: 'Animal não foi econtrada!'
            });
        }
        await Animal.destroy({ where: { id } });
        return res.status(200).json({
            message: 'Animal removidao com sucesso!'
        });
    } catch (error) {
        return res.status(500).json({
            error: `Erro interno! ${error}`
        });
    }
});
routes.post('/animal', async (req, res) => {
    try {
        const { nome } = req.body;
        if (!nome) {
            return res.status(400).json({
                error: 'Parâmetros inválidos'
            });
        }
        const animal = await Animal.create({ nome });
        return res.status(201).json(animal);
    } catch (error) {
        return res.status(500).json({
            error: `Erro interno! ${error}`
        });
    }
});
routes.put('/animal/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { nome } = req.body;
        if (!id) {
            return res.status(400).json({
                error: 'Parâmetros inválidos'
            });
        }
        const animalExiste = await Animal.findByPk(id);
        if (!animalExiste) {
            return res.status(404).json({
                error: 'Animal não foi econtrado!'
            });
        }
        await Animal.update(
            { nome },
            { where: { id } }
        );
        return res.status(200).json({
            message: 'Animal atualizado com sucesso.'
        })
    } catch (error) {
        return res.status(500).json({
            error: `Erro interno! ${error}`
        });
    }
});



routes.get('/entradas', async (req, res) => {
    try {
        const entradas = await Entrada.findAll();
        return res.status(200).json(entradas);
    } catch (error) {
        return res.status(500).json({
            error: `Erro interno! ${error}`
        });
    }
});
routes.delete('/entrada/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const entradaExiste = await Entrada.findByPk(id);
        if (!entradaExiste) {
            return res.status(404).json({
                error: 'Entrada não foi econtrada!'
            });
        }
        await Entrada.destroy({ where: { id } });
        return res.status(200).json({
            message: 'Entrada removida com sucesso!'
        });
    } catch (error) {
        return res.status(500).json({
            error: `Erro interno! ${error}`
        });
    }
});
routes.post('/entrada', async (req, res) => {
    try {
        const { id_animal } = req.body;
        const { id_pasto_entrada } = req.body;
        const { quantidade } = req.body;

        if (!id_animal || !id_pasto_entrada || !quantidade) {
            return res.status(400).json({
                error: 'Parâmetros inválidos'
            });
        }
        const entrada = await Entrada.create({ id_animal, id_pasto_entrada, quantidade });
        return res.status(201).json(entrada);
    } catch (error) {
        return res.status(500).json({
            error: `Erro interno! ${error}`
        });
    }
});
routes.put('/entrada/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { id_animal } = req.body;
        const { id_pasto_entrada } = req.body;
        const { quantidade } = req.body;
        if (!id  || !id_animal || !id_pasto_entrada || !quantidade ){
            return res.status(400).json({
                error: 'Parâmetros inválidos'
            });
        }
        const entradaExiste = await Entrada.findByPk(id);
        if (!entradaExiste) {
            return res.status(404).json({
                error: 'Entrada não foi econtrada!'
            });
        }
        await Entrada.update(
            { id_animal, id_pasto_entrada, quantidade },
            { where: { id } }
        );
        return res.status(200).json({
            message: 'Entrada atualizada com sucesso.'
        })
    } catch (error) {
        return res.status(500).json({
            error: `Erro interno! ${error}`
        });
    }
});


routes.get('/movimentacoes', async (req, res) => {
    try {
        const movimentacoes = await Movimentacao.findAll();
        return res.status(200).json(movimentacoes);
    } catch (error) {
        return res.status(500).json({
            error: `Erro interno! ${error}`
        });
    }
});
routes.delete('/movimentacao/:id', async (req, res) => {
    try {
        const { id_movimentacao } = req.params;
        const movimentacaoExiste = await Movimentacao.findByPk(id);
        if (!movimentacaoExiste) {
            return res.status(404).json({
                error: 'Movimentação não foi econtrada!'
            });
        }
        await Movimentacao.destroy({ where: { id_movimentacao } });
        return res.status(200).json({
            message: 'Movimentação removida com sucesso!'
        });
    } catch (error) {
        return res.status(500).json({
            error: `Erro interno! ${error}`
        });
    }
});
routes.post('/movimentacao', async (req, res) => {
    try {
        const { id_pasto_entrada } = req.body;
        const { id_pasto_saida } = req.body;
        const { id_animal } = req.body;
        const { quantidade_animais } = req.body;
        if (!id_pasto_entrada|| !id_pasto_saida || !id_animal || !quantidade_animais) {
            return res.status(400).json({
                error: 'Parâmetros inválidos'
            });
        }
        const movimentacao = await Movimentacao.create({ nome });
        return res.status(201).json(movimentacao);
    } catch (error) {
        return res.status(500).json({
            error: `Erro interno! ${error}`
        });
    }
});
routes.put('/movimentacao/:id', async (req, res) => {
    try {
        const { id_movimentacao } = req.params;
        const { id_pasto_entrada } = req.body;
        const { id_pasto_saida } = req.body;
        const { id_animal } = req.body;
        const { quantidade_animais } = req.body;
        if (!id_movimentacao || !id_pasto_entrada|| !id_pasto_saida || !id_animal || !quantidade_animais) {
            return res.status(400).json({
                error: 'Parâmetros inválidos'
            });
        }
        const movimentacaoExiste = await Movimentacao.findByPk(id);
        if (!movimentacaoExiste) {
            return res.status(404).json({
                error: 'Movimentação  não foi econtrado!'
            });
        }
        await MerendeiraModel.update(
            { id_pasto_entrada, id_pasto_saida, id_animal, quantidade_animais},
            { where: { id_movimentacao } }
        );
        return res.status(200).json({
            message: 'Movimentação atualizada com sucesso.'
        })
    } catch (error) {
        return res.status(500).json({
            error: `Erro interno! ${error}`
        });
    }
});


routes.get('/pastos', async (req, res) => {
    try {
        const pastos = await Pasto.findAll();
        return res.status(200).json(pastos);
    } catch (error) {
        return res.status(500).json({
            error: `Erro interno! ${error}`
        });
    }
});
routes.delete('/pasto/:id', async (req, res) => {
    try {
        const { id_pasto } = req.params;
        const pastoExiste = await Pasto.findByPk(id);
        if (!pastoExiste) {
            return res.status(404).json({
                error: 'Pasto não foi econtrada!'
            });
        }
        await Pasto.destroy({ where: { id_pasto } });
        return res.status(200).json({
            message: 'Pasto removido com sucesso!'
        });
    } catch (error) {
        return res.status(500).json({
            error: `Erro interno! ${error}`
        });
    }
});
routes.post('/pasto', async (req, res) => {
    try {
        const { nome_pasto } = req.body;
        const { capacidade } = req.body;
        if (!nome_pasto || !capacidade) {
            return res.status(400).json({
                error: 'Parâmetros inválidos'
            });
        }
        const pasto = await Pasto.create({ nome });
        return res.status(201).json(pasto);
    } catch (error) {
        return res.status(500).json({
            error: `Erro interno! ${error}`
        });
    }
});
routes.put('/pasto/:id', async (req, res) => {
    try {
        const { id_pasto } = req.params;
        const { nome_pasto } = req.body;
        const { capacidade} = req.body;
        if (!id_pasto || !nome_pasto || !capacidade) {
            return res.status(400).json({
                error: 'Parâmetros inválidos'
            });
        }
        const pastoExiste = await Pasto.findByPk(id);
        if (!pastoExiste) {
            return res.status(404).json({
                error: 'Pasto não foi econtrado!'
            });
        }
        await Pasto.update(
            { nome_pasto, capacidade },
            { where: { id_pasto } }
        );
        return res.status(200).json({
            message: 'Pasto atualizado com sucesso.'
        })
    } catch (error) {
        return res.status(500).json({
            error: `Erro interno! ${error}`
        });
    }
});

// Nota Fiscal

module.exports = { routes };
