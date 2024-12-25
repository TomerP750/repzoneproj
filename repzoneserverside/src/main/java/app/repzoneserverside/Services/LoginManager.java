package app.repzoneserverside.Services;

import app.repzoneserverside.Beans.User;
import app.repzoneserverside.Exceptions.ExistsException;
import app.repzoneserverside.Exceptions.InvalidInputException;
import app.repzoneserverside.Securtity.TokenManager;
import app.repzoneserverside.Securtity.TokenProperties;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Service;

import java.sql.Date;

@Service
public class LoginManager {

    private ApplicationContext ctx;
    private TokenManager tokenManager;

    public LoginManager(ApplicationContext ctx, TokenManager tokenManager) {
        this.ctx = ctx;
        this.tokenManager = tokenManager;
    }

    public String login(String email, String password) throws ExistsException, InvalidInputException {

        UserService userService = ctx.getBean(UserService.class);
        User userFromDb = userService.accountDetails();

        if (userService.login(email, password)) {
            String token = tokenManager.createToken(email, userFromDb.getUsername(), userFromDb.getFirstName());
            tokenManager.getActiveTokens().put(token, new TokenProperties(new Date(System.currentTimeMillis())));
            return token;
        } else {
            throw new InvalidInputException("Invalid username or password");
        }
    }


}
