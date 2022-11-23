/**
 * @deprecated
 * Test was made before refactoring, and now they are commented out not to interfere with the developed code.
 *
 */
/*package dk.kea.klstoragesystem;

import dk.kea.klstoragesystem.models.Computer;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import org.springframework.boot.test.web.client.TestRestTemplate;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Objects;

import static org.assertj.core.api.Assertions.assertThat;




@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class IntegrationTest {

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    public void getComputer_returnsComputerDetails() throws Exception {
        //arrange

        //act
        ResponseEntity<Computer> response = restTemplate.getForEntity("/computers/hp", Computer.class);

        //assert
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(Objects.requireNonNull(response.getBody()).getName()).isEqualTo("hp");
        assertThat(response.getBody().getModel()).isEqualTo("850 G8");
    }
}
*/