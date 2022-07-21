package com.login.login.Seguridad;

import javax.validation.constraints.Email;
import org.hibernate.validator.constraints.Length;

public class AuthRequest {
    @Email
    @Length(min=5, max=50)
    private String email;
    @Length(min=8, max=50)
    private String password;

    //creo que se agregaria lo otro del front end también
    
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    
}
