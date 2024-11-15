import data from '../data/bids-json.js'

export function getAllBids(req, res){
    res.json(data);
}

export function getBidById(req, res){
    const bidId = parseInt(req.params.id, 10);
    let bid = data.find(p => p.id === bidId);

    if (bid) {
        res.json(bid);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
}