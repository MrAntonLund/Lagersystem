package dk.kea.klstoragesystem.repositories;

import dk.kea.klstoragesystem.models.Bundle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BundlesRepository extends JpaRepository<Bundle,Long> {
}
