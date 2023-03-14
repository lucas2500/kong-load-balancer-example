module.exports = {
    async RandomNode(req, res){
        return res.status(200).json({response: `Node ${process.env.APPLICATION_NODE || "A"} responding!!`});
    },
}