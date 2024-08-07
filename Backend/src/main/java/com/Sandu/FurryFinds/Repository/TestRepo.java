package com.Sandu.FurryFinds.Repository;

import com.Sandu.FurryFinds.Model.TestFile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TestRepo extends JpaRepository<TestFile, Long> {
    //do nothing
}
