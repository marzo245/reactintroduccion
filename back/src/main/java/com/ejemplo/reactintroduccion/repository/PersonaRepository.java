package com.ejemplo.reactintroduccion.repository;

import com.ejemplo.reactintroduccion.model.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonaRepository extends JpaRepository<Persona, Long> {
}
