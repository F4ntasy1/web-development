PROGRAM PrintHelloPerson(INPUT, OUTPUT);
USES
  DOS;
VAR
  Parameter, Par, Meaning: STRING;
  Position: INTEGER;
BEGIN
  WRITELN;
  Parameter := GetEnv('QUERY_STRING') + '#';
  Par := COPY(Parameter, 1, 5);
  Position := POS('#', Parameter) - 6;
  Meaning := COPY(Parameter, 6, Position);
  IF (Par = 'name=') AND (Position > 0)
  THEN
    WRITELN('Hello dear, ', Meaning, '!')
  ELSE
    WRITELN('Hello, Anonymous!')
END.
