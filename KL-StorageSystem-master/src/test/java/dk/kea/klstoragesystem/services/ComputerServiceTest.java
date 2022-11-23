/**
 * @deprecated
 * Test was made before refactoring, and now they are commented out not to interfere with the developed code.
 *
 */
/*
package dk.kea.klstoragesystem.services;

import dk.kea.klstoragesystem.exceptions.ComputerNotFoundException;
import dk.kea.klstoragesystem.repositories.ComputerRepository;
import org.junit.Before;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.internal.matchers.Null;
import org.mockito.junit.MockitoJUnitRunner;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.BDDMockito.given;

@RunWith(MockitoJUnitRunner.class)
class ComputerServiceTest {

    @Mock
    private ComputerRepository computerRepository;

    private ComputerService computerService;

    @Before
    public void setUp() throws Exception {
        computerService = new ComputerService(computerRepository);
    }

    @Test
    void getComputerDetails_returnsComputerInfo() {
        given(computerRepository.findByName("hp")).willReturn(new dk.kea.klstoragesystem.models.Computer("hp", "850 G8"));
        dk.kea.klstoragesystem.models.Computer computer = computerService.getComputerDetails("hp");
        assertThat(computer.getName()).isEqualTo("hp");
        assertThat(computer.getModel()).isEqualTo("850 G8");
    }


    @Test
    public void getComputerDetails_whenComputerNotFound() {
        NullPointerException thrown = Assertions.assertThrows(NullPointerException.class, () -> {
            given(computerRepository.findByName("hp")).willReturn(null);
        });
        Assertions.assertNull(thrown);
    }


}*/

