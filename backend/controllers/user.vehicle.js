import Vehicle from '../models/Vehicle.js';

export const addVehicle = async (req, res) => {
  try {
    const vehicle = new Vehicle({ ...req.body, user: req.user.id });
    await vehicle.save();
    res.status(201).json(vehicle);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find({ user: req.user.id });
    res.json(vehicles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteVehicle = async (req, res) => {
  try {
    await Vehicle.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    res.json({ message: 'Vehicle removed' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
