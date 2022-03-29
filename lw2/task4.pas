PROGRAM WorkWithQueryString(INPUT, OUTPUT);
USES
  DOS;
FUNCTION GetQueryStringParameter(Key: STRING): STRING;
VAR
  Query, Meaning: STRING;
  Ch1, Ch2: CHAR;
  i, f, LengthKey, LengthQuery, Fill, Number1, Number2: INTEGER;
BEGIN
  i := 1;
  f := 1;
  Fill := 0;
  LengthKey := LENGTH(Key);
  Query := GetEnv('QUERY_STRING');
  LengthQuery := LENGTH(Query);
  Ch1 := Key[i];
  WHILE (i <> LengthKey) AND (f < LengthQuery)
  DO
    BEGIN
      Ch2 := Query[f];
      IF (f = 1) OR (Ch2 = '&')
      THEN
        BEGIN
          IF Ch2 = '&'
          THEN
            BEGIN
              f := f + 1;
              Ch2 := Query[f]
            END;
          WHILE (Ch1 = Ch2) AND (f < LengthQuery)
          DO
            BEGIN
              Fill := Fill + 1;
              i := i + 1;
              f := f + 1;
              Ch1 := Key[i];
              Ch2 := Query[f]
            END
        END;
      IF Fill = LengthKey
      THEN
        BEGIN
          Number1 := f + 1;
          i := LengthKey;
          Ch1 := Ch2
        END
      ELSE
        BEGIN
          i := 1;
          Ch1 := Key[i];
          f := f + 1
        END
    END;
  WHILE (i = LengthKey) AND (Ch2 <> '&') AND (f < LengthQuery - 1)
  DO
    BEGIN
      f := f + 1;
      Ch2 := Query[f];
      IF (Ch2 = '&') OR (f >= LengthQuery)
      THEN
        Number2 := f - Number1
    END;
  IF (i = LengthKey) AND (Ch1 = '=')
  THEN
    BEGIN
      Meaning := COPY(Query, Number1, Number2);
      GetQueryStringParameter := Meaning
    END
  ELSE
    GetQueryStringParameter := 'Invalid Parameter'
END;

BEGIN
  WRITELN;
  WRITELN('First Name: ', GetQueryStringParameter('first_name'));
  WRITELN('Last Name: ', GetQueryStringParameter('last_name'));
  WRITELN('Age: ', GetQueryStringParameter('age'))
END.