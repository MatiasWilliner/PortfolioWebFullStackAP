package com.Portfolio.Backend_Portfolio.service;

import com.Portfolio.Backend_Portfolio.model.HistorialLaboral;
import java.util.List;

public interface IHistorialLaboralService {
    public List<HistorialLaboral> verHistorialLaboral();
    public void cargarHistorialLaboral(HistorialLaboral itemEducacion);
    public void borrarHistorialLaboral(Long id);
    public void modificarHistorialLaboral(HistorialLaboral itemEducacion);
}
