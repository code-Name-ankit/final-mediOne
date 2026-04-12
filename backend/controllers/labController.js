import Lab from '../models/Lab.js';

export const findNearestLabs = async (req, res) => {
    try {
        const { lat, lon, test } = req.query;

        if (!lat || !lon) {
            return res.status(400).json({ message: "Lat and Lon are required" });
        }

        let query = {
            location: {
                $near: {
                    $geometry: {
                        type: "Point",
                        coordinates: [parseFloat(lon), parseFloat(lat)]
                    },
                    $maxDistance: 25000 // 25 km radius 
                }
            }
        };

        if (test) {
            query.tests = { $regex: test, $options: 'i' };
        }

        const labs = await Lab.find(query);
        res.status(200).json(labs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const addLab = async (req, res) => {
    try {
        const newLab = await Lab.create(req.body);
        res.status(201).json(newLab);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};