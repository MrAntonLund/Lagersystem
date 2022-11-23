package dk.kea.klstoragesystem.models.enums;

/**
 * @author Julius Panduro
 */

/**
 * @Team_talk
 * Too much information for enums or shall we go with it ?
 */
public enum Grade {
    PERFECT("Brand New Quality"),
    GOOD("Good Quality Can be reused"),
    BAD("Very Poor Quality - Scrap");

    private final String status;

    Grade(String status) {
        this.status = status;
    }

    public String getStatus() {
        return status;
    }
}
