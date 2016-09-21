$( document ).ready(function() {
    $("#hostFilePath").html(GetPathFromUserAgent());
});

function PromtCopy() {
    window.prompt("Copy to clipboard: Ctrl+C, Enter", GetPathFromUserAgent());
}

// Inspired by http://stackoverflow.com/a/9514476
function GetPathFromUserAgent() {
    var clientStrings = [
        {s:'Windows 11.x',          r:/(Windows 11|Windows NT 11)/,                 path: "%SystemRoot%\\System32\\drivers\\etc\\hosts"},
        {s:'Windows 10.x',          r:/(Windows 10|Windows NT 10)/,                 path: "%SystemRoot%\\System32\\drivers\\etc\\hosts"},
        {s:'Windows 8.1',           r:/(Windows 8.1|Windows NT 6.3)/,               path: "%SystemRoot%\\System32\\drivers\\etc\\hosts"},
        {s:'Windows 8',             r:/(Windows 8|Windows NT 6.2)/,                 path: "%SystemRoot%\\System32\\drivers\\etc\\hosts"},
        {s:'Windows 7',             r:/(Windows 7|Windows NT 6.1)/,                 path: "%SystemRoot%\\System32\\drivers\\etc\\hosts"},
        {s:'Windows Vista',         r:/Windows NT 6.0/,                             path: "%SystemRoot%\\System32\\drivers\\etc\\hosts"},
        {s:'Windows Server 2003',   r:/Windows NT 5.2/,                             path: "%SystemRoot%\\System32\\drivers\\etc\\hosts"},
        {s:'Windows XP',            r:/(Windows NT 5.1|Windows XP)/,                path: "%SystemRoot%\\System32\\drivers\\etc\\hosts"},
        {s:'Windows 2000',          r:/(Windows NT 5.0|Windows 2000)/,              path: "%SystemRoot%\\System32\\drivers\\etc\\hosts"},
        {s:'Windows ME',            r:/(Win 9x 4.90|Windows ME)/,                   path: "%WinDir%\\hosts"},
        {s:'Windows 98',            r:/(Windows 98|Win98)/,                         path: "%WinDir%\\hosts"},
        {s:'Windows 95',            r:/(Windows 95|Win95|Windows_95)/,              path: "%WinDir%\\hosts"},
        {s:'Windows NT 4.0',        r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/, path: "%WinDir%\\hosts"},
        {s:'Windows CE',            r:/Windows CE/,                                 path: "Registry: HKEY_LOCAL_MACHINE\\Comm\\Tcpip\\Hosts\\yourhostname"},
        {s:'Windows 3.11',          r:/Win16/,                                      path: "%WinDir%\\HOSTS"},
        {s:'Android',               r:/Android/,                                    path: "/etc/hosts"},
        {s:'Open BSD',              r:/OpenBSD/,                                    path: "/etc/hosts"},
        {s:'Sun OS',                r:/SunOS/,                                      path: "/etc/inet/hosts"},
        {s:'Linux',                 r:/(Linux|X11)/,                                path: "/etc/hosts"},
        {s:'iOS',                   r:/(iPhone|iPad|iPod)/,                         path: "/etc/hosts"},
        {s:'Mac OS X',              r:/Mac OS X 10.13/,                             path: "/etc/hosts"},
        {s:'Mac OS X',              r:/Mac OS X 10.12/,                             path: "/etc/hosts"},
        {s:'Mac OS X',              r:/Mac OS X 10.11/,                             path: "/etc/hosts"},
        {s:'Mac OS X',              r:/Mac OS X 10.10/,                             path: "/etc/hosts"},
        {s:'Mac OS X',              r:/Mac OS X 10.9/,                              path: "/etc/hosts"},
        {s:'Mac OS X',              r:/Mac OS X 10.8/,                              path: "/etc/hosts"},
        {s:'Mac OS X',              r:/Mac OS X 10.7/,                              path: "/etc/hosts"},
        {s:'Mac OS X',              r:/Mac OS X 10.6/,                              path: "/etc/hosts"},
        {s:'Mac OS X',              r:/Mac OS X 10.5/,                              path: "/etc/hosts"},
        {s:'Mac OS X',              r:/Mac OS X 10.4/,                              path: "/etc/hosts"},
        {s:'Mac OS X',              r:/Mac OS X 10.3/,                              path: "/etc/hosts"},
        {s:'Mac OS X',              r:/Mac OS X 10.2/,                              path: "/etc/hosts"},
        {s:'Mac OS X',              r:/Mac OS X 10.1/,                              path: "(Added through NetInfo or niload)"},
        {s:'Mac OS X',              r:/Mac OS X 10.0/,                              path: "(Added through NetInfo or niload)"},
        {s:'Mac OS',                r:/(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/,    path: "probably /etc/hosts"},
        {s:'QNX',                   r:/QNX/,                                        path: "/etc/hosts"},
        {s:'UNIX', r                :/UNIX/,                                        path: "/etc/hosts"},
        {s:'BeOS',                  r:/BeOS/,                                       path: "/boot/beos/etc/hosts"},
        {s:'OS/2',                  r:/OS\/2/,                                      path: '"bootdrive":\\mptn\\etc\\'},
        {s:'Search Bot',            r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}
    ];
    for (var id in clientStrings) {
        var cs = clientStrings[id];
        if (cs.r.test(navigator.userAgent))
            return cs.path;
    }
    return "Unknown OS from UserAgent string: " + navigator.userAgent;
}