/**
 * @deprecated
 * Test was made before refactoring, and now they are commented out not to interfere with the developed code.
 *
 */
/*package dk.kea.klstoragesystem;

import dk.kea.klstoragesystem.controllers.ComputerController;
import dk.kea.klstoragesystem.exceptions.ComputerNotFoundException;
import dk.kea.klstoragesystem.models.Computer;
import dk.kea.klstoragesystem.services.ComputerService;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@RunWith(SpringRunner.class)
@WebMvcTest(ComputerController.class)
public class ComputerControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ComputerService computerService;

    @Test
    public void getComputer_ShouldReturnComputer() throws Exception {
        given(computerService.getComputerDetails(anyString())).willReturn(new Computer("hp", "850 G8"));

        mockMvc.perform(MockMvcRequestBuilders.get("/computers/hp"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("name").value("hp"))
                .andExpect(jsonPath("model").value("850 G8"));
    }

    @Test
    public void getComputer_notFound() throws Exception {
        given(computerService.getComputerDetails(anyString())).willThrow(new ComputerNotFoundException());

        mockMvc.perform(MockMvcRequestBuilders.get("/computers/hp"))
                .andExpect(status().isNotFound());
    }
}
*/