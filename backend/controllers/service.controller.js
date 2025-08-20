import Service from '../models/Service.js';

export const createService = async (req, res) => {
  try {
    const service = new Service(req.body);
    await service.save();
    res.status(201).json(service);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    res.json(service);
  } catch (err) {
    res.status(404).json({ error: 'Service not found' });
  }
};
