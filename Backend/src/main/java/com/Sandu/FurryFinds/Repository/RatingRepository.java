package com.Sandu.FurryFinds.Repository;

import com.Sandu.FurryFinds.Model.RatingModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RatingRepository extends JpaRepository<RatingModel , Long> {
}
