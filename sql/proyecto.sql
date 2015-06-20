-- Table `ProgramacionNegocios`.`proyecto`
-- -----------------------------------------------------
CREATE TABLE `programacionnegocios`.`proyecto` (
  `idproyecto` INT NOT NULL COMMENT '',
  `proyectonombre` VARCHAR(45) NOT NULL COMMENT '',
  `proyectodescripcion` VARCHAR(45) NOT NULL COMMENT '',
  `proyectolenguaje` VARCHAR(45) NOT NULL COMMENT '',
  `proyectotamaño` INT NOT NULL COMMENT '',
  `proyectofotografia` VARCHAR(45) NOT NULL COMMENT '',
  `proyectoinstrucc` VARCHAR(45) NOT NULL COMMENT '',
  `proyectoguia` VARCHAR(45) NOT NULL COMMENT '',
  `proyectoversion` VARCHAR(45) NULL COMMENT '',
  `proyectonomclase` VARCHAR(45) NULL COMMENT '',
  PRIMARY KEY (`idproyecto`)  COMMENT '')
ENGINE = InnoDB;
