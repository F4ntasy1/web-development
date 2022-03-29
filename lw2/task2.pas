PROGRAM SarahRevere(INPUT, OUTPUT);
USES
  DOS;
VAR
  Lanterns: STRING;
BEGIN
  WRITELN;
  Lanterns := GetEnv('QUERY_STRING');
  IF Lanterns = 'lanterns=1'
  THEN
    WRITELN('The British are coming by land')
  ELSE
    IF Lanterns = 'lanterns=2'
    THEN
      WRITELN('The British are coming by sea.')
    ELSE
      WRITELN('Sarah didn''t say')
END.
