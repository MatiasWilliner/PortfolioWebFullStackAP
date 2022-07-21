
package com.Portfolio.Backend_Portfolio.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Proyecto {
    
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;
    private String nombre;
    private String descripcion;
    private String urlProyecto;

    public Proyecto() {
    }

    public Proyecto(Long id, String nombre, String descripcion, String urlProyecto) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.urlProyecto = urlProyecto;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getUrlProyecto() {
        return urlProyecto;
    }

    public void setUrlProyecto(String urlProyecto) {
        this.urlProyecto = urlProyecto;
    }
    
}
