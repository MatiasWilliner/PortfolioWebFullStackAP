package com.Portfolio.Backend_Portfolio.service;

import com.Portfolio.Backend_Portfolio.model.Proyecto;
import java.util.List;

public interface IProyectoService {
    public List<Proyecto> verProyecto();
    public void cargarProyecto(Proyecto itemProyecto);
    public void borrarProyecto(Long id);
    public void modificarProyecto(Proyecto itemProyecto);
}
