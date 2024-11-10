package com.example.server.utils;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
public class JwtUtils {

    private String SECRET_KEY = "TaK+HaV^uvCHEFsEVfypW#7g9^k*Z8$V";

    private SecretKey getSignInKey(){
        return Keys.hmacShaKeyFor(SECRET_KEY.getBytes());
    }

    public String getUsername(String token){
        Claims claims=extractAllClaims(token);
        return claims.getSubject();
    }

    private Claims extractAllClaims(String token){
        return Jwts.parser()
                .verifyWith(getSignInKey())
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }

    public Date extractExpiration(String token){
        return extractAllClaims(token).getExpiration();
    }

    private Boolean isTokenExpire(String token){
        return extractExpiration(token).before(new Date());
    }

    public String generateToken(String username){
        Map<String,Object>claims=new HashMap<>();
        return createToken(claims,username);
    }

    private String createToken(Map<String ,Object>claims,String subject){
        return Jwts.builder()
                .claims(claims)
                .subject(subject)
                .header().empty().add("typ","JWT")
                .and()
                .issuedAt(new Date(System.currentTimeMillis()))
                .expiration(new Date(System.currentTimeMillis()+1000*60*10))
                .signWith(getSignInKey())
                .compact();
    }

    public Boolean validateToken(String token){
        return !isTokenExpire(token);
    }
}
