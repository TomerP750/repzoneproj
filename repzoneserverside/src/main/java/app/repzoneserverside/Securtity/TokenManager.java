package app.repzoneserverside.Securtity;


import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import org.springframework.context.ApplicationContext;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.HashMap;

@Component
public class TokenManager extends Thread {


    private HashMap<String, TokenProperties> activeTokens = new HashMap<>();

    private ApplicationContext ctx;

    public TokenManager(ApplicationContext ctx) {
        this.ctx = ctx;
    }

    public String createToken(String userName, String email, String firstName) {
        String token = JWT.create()
                .withIssuer("RepZone")
                .withSubject(userName)
                .withClaim("firstName", firstName)
                .withClaim("email", email)
                .sign(Algorithm.none());
        return token;
    }

    public HashMap<String, TokenProperties> getActiveTokens() {
        return activeTokens;
    }

    @Scheduled(cron = "0 0 12 * * ?")
    public void run() {
        for (String key : activeTokens.keySet()) {
            TokenProperties tokenProperties = activeTokens.get(key);
            if (System.currentTimeMillis() - tokenProperties.getLastUpdated().getTime() >= (1000*60*30)) {
                activeTokens.remove(key);
                System.out.println("Token has been Removed!");
            }
        }
    }

}
