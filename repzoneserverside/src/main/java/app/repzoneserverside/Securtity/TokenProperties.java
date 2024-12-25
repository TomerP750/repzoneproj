package app.repzoneserverside.Securtity;

import java.util.Date;

public class TokenProperties {
    private Date lastUpdated;

    public TokenProperties(Date lastUpdated) {
        this.lastUpdated = lastUpdated;
    }

    public Date getLastUpdated() {
        return lastUpdated;
    }
}
