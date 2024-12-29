package app.repzoneserverside;

import app.repzoneserverside.Securtity.TokenProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.annotation.EnableScheduling;

import java.util.HashMap;

@SpringBootApplication
@EnableScheduling
public class RepzoneserversideApplication {

    public static void main(String[] args) {
        ApplicationContext ctx = SpringApplication.run(RepzoneserversideApplication.class, args);
        System.out.println("Server is Running!");
    }

}
