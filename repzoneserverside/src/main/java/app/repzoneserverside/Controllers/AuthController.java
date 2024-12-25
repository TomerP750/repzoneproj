package app.repzoneserverside.Controllers;

import app.repzoneserverside.Beans.User;
import app.repzoneserverside.Exceptions.ExistsException;
import app.repzoneserverside.Exceptions.InvalidInputException;
import app.repzoneserverside.Securtity.TokenManager;
import app.repzoneserverside.Services.LoginManager;
import app.repzoneserverside.Services.UserService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    private LoginManager loginManager;
    private TokenManager tokenManager;
    private UserService userService;

    public AuthController(LoginManager loginManager, TokenManager tokenManager, UserService userService) {
        this.loginManager = loginManager;
        this.tokenManager = tokenManager;
        this.userService = userService;
    }
    //TODO when register with user isAdmin is false and when creating my admin isAdmin is true
    @PostMapping("register")
    public void register(@RequestBody User user) throws InvalidInputException, ExistsException {
        userService.register(user);
    }

    @PostMapping("login")
    public String login(String email, String password) throws InvalidInputException, ExistsException {
        return loginManager.login(email, password);
    }
    @GetMapping("logout")
    public void logout(String token) {
        tokenManager.getActiveTokens().remove(token);
    }
}
