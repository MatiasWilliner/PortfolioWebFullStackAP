package com.login.login.Seguridad.Jwt;


import com.login.login.model.Usuario;
import java.io.IOException;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.ObjectUtils;
import org.springframework.web.filter.OncePerRequestFilter;

@Component
public class JwtTokenFilter extends OncePerRequestFilter{
    
    @Autowired
    private JwtTokenUtil jwtUtil;
    
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws IOException, ServletException
    {
        if(!hasAuthorizationBearer(request))
        {
            filterChain.doFilter(request, response);
            return;
        }
            
        String token= getAccessToken(request);
            
        if(!jwtUtil.validateAccessToken(token))
        {
            filterChain.doFilter(request, response);
        }
        
        setAuthenticationContext(token,request);
        filterChain.doFilter(request, response);
    }
    
    private boolean hasAuthorizationBearer(HttpServletRequest request)
    {
        String header=request.getHeader("Authorization");
        if(ObjectUtils.isEmpty(header) || !header.startsWith("Bearer"))
        {
            return false;
        }
        return true;
    }
    
    private String getAccessToken(HttpServletRequest request)
    {
        String header=request.getHeader("Authorization");
        String token=header.split("")[1].trim();
        return token;
    }
    
    private void setAuthenticationContext(String token, HttpServletRequest request)
    {
        UserDetails detallesUsuario=getUserDetails(token);
        
        UsernamePasswordAuthenticationToken autenticacion=new UsernamePasswordAuthenticationToken(detallesUsuario, null, null);
    
        autenticacion.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
        
        SecurityContextHolder.getContext().setAuthentication(autenticacion);
    }
    
    private UserDetails getUserDetails(String token){
        Usuario detallesUsuario=new Usuario();
        String[] jwtSubject=jwtUtil.getSubject(token).split(",");
        
        detallesUsuario.setId(Long.parseLong(jwtSubject[0]));
        detallesUsuario.setEmail(jwtSubject[1]);
        
        return detallesUsuario;
    }
    
    
}
