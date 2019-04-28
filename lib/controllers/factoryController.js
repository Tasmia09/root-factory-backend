import Factory from '../models/factory'

module.exports.getAll = async(req, res) => {
    const targetFactories = await Factory.find({});
    res.json(targetFactories)
}

module.exports.getFactory = async(req, res) => {
    console.log("Req.query is", req.query)
    const {id} = req.query
    const targetFactory = await Factory.findOne({_id: id});
    console.log('targetFactory is: ', targetFactory)
    res.json(targetFactory)
}

module.exports.createFactory = async(req, res) => {
    const newFactory = await Factory.create(req.body);
    const factories = await Factory.find({});
    console.log('newFactory: ', newFactory)
    res.json(factories);
}

module.exports.updateFactory = async(req, res) => {
    const updatedFactory = await Factory.findOneAndUpdate({_id:req.params.id},{ $set: req.body }, { new: true });
    const updatedFactories = await Factory.find({});
    console.log('updatedFactory: ', updatedFactory)
    res.json(updatedFactories);
}

module.exports.deleteFactory = async(req, res) => {
    const { id } = req.params
    await Factory.findOneAndRemove({_id: id})
    const remainingFactories = await Factory.find({});
    res.json(remainingFactories);
}