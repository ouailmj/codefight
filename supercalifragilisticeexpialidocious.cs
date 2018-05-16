int[] supercalifragilisticexpialidocious(char s) {
    var list = new List<int>();
    const string str = "supercalifragilisticexpialidocious";
    for (var i = 0 ; i < str.Length; ++i)
    {
        if (str[i] == s)
        {
            list.Add(i);
        }
    }

    return list.ToArray();
}
